const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const rewireBabelLoader = require('react-app-rewire-babel-loader');
const rewireEslint = require('react-app-rewire-eslint');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, 'node_modules', relativePath);

const modules = [
  'rndm-render',
];

module.exports = (config, env) => (
  rewireEslint(modules.reduce((o, i) => rewireBabelLoader.include(o, resolveApp(i)), config), env)
);
