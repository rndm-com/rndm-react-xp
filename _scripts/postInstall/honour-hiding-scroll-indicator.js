const fs = require('fs');
const path = require('path');

const current = process.cwd();
const script = 'node_modules/react-native-web/dist/exports/StyleSheet/compile.js';

console.log(`Updating ${script}`);

const file = path.join(current, script);

const contents = fs.readFileSync(file).toString();

const find = 'rules.push(selector + "::-webkit-scrollbar{display:none}", selector + "{overflow:-moz-scrollbars-none;-ms-overflow-style:none}");';

const replace = 'rules.push(selector + "::-webkit-scrollbar{display:none}", selector + "::-webkit-scrollbar-track{display:none}", selector + "{overflow:-moz-scrollbars-none;-ms-overflow-style:none}");';

const output = contents.split(find).join(replace);

fs.writeFileSync(file, output);
