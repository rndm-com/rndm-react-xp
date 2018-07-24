const fs = require('fs');
const rewireBabelLoader = require('react-app-rewire-babel-loader');
const rewireEslint = require('react-app-rewire-eslint');
const modules = require('./_supporting/rewire_modules.json');

const rewire = (config, env) => (
  rewireEslint((modules || []).reduce((o, i) => rewireBabelLoader.include(o, [fs.realpathSync(process.cwd()), 'node_modules', i].join('/')), config), env)
);

module.exports = rewire;
