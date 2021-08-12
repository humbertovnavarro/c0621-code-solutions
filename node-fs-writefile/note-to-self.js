const fs = require('fs');
const input = process.argv.slice(2);
fs.writeFile('note.txt', input.join(' '), err => {
  if (err) throw err;
});
