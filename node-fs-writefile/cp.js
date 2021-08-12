const fs = require('fs');
const fileIn = process.argv[2];
const fileOut = process.argv[3];
fs.readFile(fileIn, (err, data) => {
  if (err) throw err;
  fs.writeFile(fileOut, data, err => { if (err) throw err; });
});
