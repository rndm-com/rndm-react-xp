const fs = require('fs');
const path = require('path');

const current = process.cwd();
const script = 'node_modules/react-native/scripts/find-node.sh';

console.log(`Updating ${script}`);

const file = path.join(current, script);

const contents = fs.readFileSync(file).toString();

const find = `# LICENSE file in the root directory of this source tree.

set -e`;

const replace = `# LICENSE file in the root directory of this source tree.

unset PREFIX;

set -e`;

const output = contents.split(find).join(replace);

fs.writeFileSync(file, output);
