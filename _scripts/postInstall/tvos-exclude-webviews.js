const fs = require('fs');
const path = require('path');

const current = process.cwd();
const project = 'ios/Pods/Pods.xcodeproj/project.pbxproj';

const file = path.join(current, project);

const contents = fs.readFileSync(file).toString().split('\n');

const RCTWKWebView = contents.filter(i => i.includes('/* RCTWKWebView.h in Headers */'))[1].split(' ').filter(Boolean)[0].split('\t').filter(Boolean)[0];

const filtered = contents.filter(i => !i.includes(RCTWKWebView) && !i.includes('RCTWKWebViewManager.m') && !i.includes('RCTWKWebView.m'));

const output = filtered.join('\n');

fs.writeFileSync(file, output);


