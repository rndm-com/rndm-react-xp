const fs = require('fs');
const path = require('path');

const current = process.cwd();
const script = 'node_modules/react-native/scripts/react-native-xcode.sh';

const file = path.join(current, script);

const contents = fs.readFileSync(file).toString();

const find = `# Define entry file
if [[ -s "index.ios.js" ]]; then
  ENTRY_FILE=\${1:-index.ios.js}
else
  ENTRY_FILE=\${1:-index.js}
fi`;

const replace = `# Define entry file
if [[ -s $CUSTOM_SRC_FILE ]]; then
  ENTRY_FILE=$CUSTOM_SRC_FILE
elif [[ -s "index.ios.js" ]]; then
  ENTRY_FILE=\${1:-index.ios.js}
else
  ENTRY_FILE=\${1:-index.js}
fi`;

const output = contents.split(find).join(replace);

fs.writeFileSync(file, output);
