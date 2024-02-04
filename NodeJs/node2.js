// const fs = require('fs');
// let text = fs.readFileSync('read.txt', 'utf-8');
// console.log(text);

const fs = require('fs');
let text = fs.readFileSync('read.txt', 'utf-8');
text = text.replace('Lorem', 'start writing...');
text = text.replace('read.txt', 'write.txt');
console.log(text);
fs.writeFileSync('write.txt', text);