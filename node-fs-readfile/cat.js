const files = [];
const fs = require('fs');
for (let i = 2; i < process.argv.length; i++) {
  files.push(process.argv[i]);
}
files.forEach(file => {
  fs.readFile(file, { encoding: 'utf8' }, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
