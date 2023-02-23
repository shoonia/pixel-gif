const generateScopedName = require('mini-css-class-name/postcss-modules');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  modules: true,
  plugins: {
    'postcss-input-range': {},
    'postcss-modules': {
      generateScopedName: isDev
        ? '[folder]_[local]_[hash:base64:5]'
        : generateScopedName(),
    },
  },
};
