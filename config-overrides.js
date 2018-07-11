const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const rewireBabelLoader = require('react-app-rewire-babel-loader');
const rewireEslint = require('react-app-rewire-eslint');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = function override(config, env) {

  config = rewireBabelLoader.include(config, resolveApp('node_modules/react-navigation'));
  config = rewireBabelLoader.include(config, resolveApp('node_modules/react-native-tab-view'));
  config = rewireBabelLoader.include(config, resolveApp('node_modules/react-native-safe-area-view'));
  config = rewireEslint(config, env);

  return config;

};