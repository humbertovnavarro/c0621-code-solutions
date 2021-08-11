const file = process.argv[2];
const fs = require('fs');

fs.readFile(file, { encoding: 'utf8' }, (err, data) => {
  if (err) throw err;
  console.log(data);
});
