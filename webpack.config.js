const { resolve } = require('node:path');
const { realpathSync } = require('node:fs');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const createLocalIdent = require('mini-css-class-name/css-loader');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const CssMqpackerPlugin = require('css-mqpacker-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const manifest = require('./static/manifest.json');
const colors = require('./src/utils/colors.json');

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

const srcDir = resolveApp('src');
const staticDir = resolveApp('static');
const distDir = resolveApp('dist');

module.exports = ({ NODE_ENV }) => {
  const isDev = NODE_ENV === 'development';
  const isProd = NODE_ENV === 'production';

  return {
    mode: NODE_ENV,
    bail: isProd,
    devtool: isDev && 'cheap-module-source-map',
    entry: resolveApp('src/main.tsx'),
    output: {
      iife: false,
      scriptType: 'module',
      path: isProd ? distDir : undefined,
      pathinfo: isDev,
      filename: '[name].[contenthash:4].js',
      publicPath: '',
      clean: isProd,
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 2020,
            module: true,
            toplevel: true,
            parse: {
              ecma: 2020,
            },
            compress: {
              ecma: 2020,
              module: true,
              comparisons: false,
              inline: 2,
              drop_console: false,
              passes: 3,
              toplevel: true,
              pure_getters: true,
            },
            output: {
              ecma: 2020,
              comments: false,
            },
          },
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                  removeAllButFirst: true,
                },
              },
            ],
          },
        }),
        new CssMqpackerPlugin(),
      ],
    },
    resolve: {
      modules: [
        'node_modules',
        resolveApp('node_modules'),
      ],
      extensions: [
        '.js',
        '.ts',
        '.tsx',
      ],
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          oneOf: [
            {
              test: /\.[jt]sx?$/,
              include: srcDir,
              loader: 'babel-loader',
              options: {
                cacheDirectory: false,
                cacheCompression: false,
                compact: isProd,
                presets: [
                  '@babel/typescript',
                  'jsx-dom-runtime/babel-preset',
                ],
              },
            },
            {
              test: /\.css$/,
              use: [
                isDev
                  ? 'style-loader'
                  : MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    sourceMap: isDev,
                    modules: isDev ? {
                      localIdentName: '[file]--[local]',
                    } : {
                      getLocalIdent: createLocalIdent(),
                    },
                  },
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: isDev,
                    postcssOptions: {
                      plugins: [
                        isProd && require('autoprefixer'),
                        require('postcss-input-range'),
                      ].filter(Boolean),
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'head',
        template: resolveApp('src/index.ejs'),
        scriptLoading: 'module',
        minify: isProd && {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
        templateParameters: {
          manifest,
          isProd,
          colors,
        },
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        'process.env.HOMEPAGE': JSON.stringify(manifest.scope),
        'process.env': 'undefined',
        'process': 'undefined',
      }),
      new ForkTsCheckerWebpackPlugin({
        async: isDev,
        typescript: {
          configFile: resolveApp('tsconfig.json'),
        },
      }),
      isProd && new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        mode: NODE_ENV,
        sourcemap: isDev,
        inlineWorkboxRuntime: true,
        exclude: [
          '.DS_Store',
        ],
      }),
      isProd && new MiniCssExtractPlugin(),
      isProd && new HTMLInlineCSSWebpackPlugin({
        styleTagFactory: ({ style }) => `<style>${style}</style>`,
      }),
      isProd && new CopyPlugin({
        patterns: [
          {
            from: staticDir,
            to: distDir,
          },
        ],
      }),
    ].filter(Boolean),
    node: false,
    performance: false,
    experiments: {
      backCompat: false,
      outputModule: true,
    },
    devServer: {
      hot: false,
      compress: true,
      static: srcDir,
      port: 3000,
    },
  };
};
