const files = [];
const fs = require('fs');
let string = '';
let readFiles = 0;
for (let i = 2; i < process.argv.length; i++) {
  files.push(process.argv[i]);
}

for (var i = 0; i < files.length; i++) {
  fs.readFile(files[i], { encoding: 'utf8' }, readFileCallback);
}

function readFileCallback(err, data) {
  if (err) throw err;
  string += data;
  readFiles++;
  if (readFiles === files.length) {
    console.log(string);
  }
}
