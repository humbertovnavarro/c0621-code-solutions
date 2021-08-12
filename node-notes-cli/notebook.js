const [, , command, ...args] = process.argv;
const fs = require('fs');
const data = require('./data.json');
const Entries = require('./entries.js');
const entries = new Entries(data.nextId, data.notes);
const error = entries.process(command, args);
if (error) {
  console.error(error);
  process.exit(2);
}
if (entries.changes) {
  fs.writeFile('./data.json', entries.serialize(), error => {
    if (error) {
      console.error('Could not write to file. Check permissions?');
      process.exit(1);
    }
  });
}
console.log(entries.serialize());
