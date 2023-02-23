const miniCssClassName = require('mini-css-class-name/postcss-modules');

const generateScopedName = process.env.NODE_ENV === 'development'
  ? '[folder]_[local]_[hash:base64:5]'
  : miniCssClassName();

module.exports = {
  modules: true,
  plugins: {
    'postcss-input-range': {},
    'postcss-modules': {
      generateScopedName,
    },
  },
};
