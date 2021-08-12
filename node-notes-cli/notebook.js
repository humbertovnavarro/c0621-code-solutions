const args = process.argv.slice(2);
const fs = require('fs');
const Entry = require('./entry.js').Entry;
const entries = [];
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const notes = data.notes;
for (const key in notes) {
  const entry = new Entry(key, notes[key]);
  entries.push(entry);
}

function readAll() {
  entries.forEach(entry => entry.print());
}

if (args[0] === 'read') {
  readAll();
}
