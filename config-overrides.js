const {alias} = require('react-app-rewire-alias');

const aliasMap = {
  '@': 'src',
  '@assets': 'src/assets',
  '@pages': 'src/pages',
  '@components': 'src/components',
  '@shared': 'src/components/shared',
  '@ui': 'src/components/ui',
  '@styles': 'src/styles',
  '@store': 'src/store',
  '@utils': 'src/utils',
  '@hooks': 'src/hooks',
};

module.exports = function override(config) {
  alias(aliasMap)(config);

  return config;
};