const args = process.argv.slice(2);
const fs = require('fs');
const data = require('./data.json');
const entries = [];
const notes = data.notes;
class Entry {
  constructor(id, textContent) {
    this.id = id;
    this.textContent = textContent;
  }

  serialize() {
    data.notes[this.id] = this.textContent;
    const dataJSON = JSON.stringify(data, null, 2);
    fs.writeFileSync('data.json', dataJSON, 'utf8', err => { if (err) throw err; });
  }

  print() {
    console.log(`${this.id}: ${this.textContent}`);
  }
}

for (const key in notes) {
  const entry = new Entry(key, notes[key]);
  entries.push(entry);
}

const [first, second] = args;
if (first === 'read') {
  if (!second) {
    readAll();
  } else {
    const entry = findId(second);
    if (entry) {
      entry.print();
      process.exit(0);
    } else {
      console.error('No such entry.');
      process.exit(1);
    }
  }
} else if (first === 'add') {
  if (!second) {
    console.error('Please specify a title.');
  } else {
    const entry = new Entry(data.nextId, second);
    data.nextId++;
    entry.serialize();
    process.exit(0);
  }
}

function readAll() {
  entries.forEach(entry => entry.print());
}

function findId(id) {
  for (const entry of entries) {
    if (entry.id === id) {
      return entry;
    }
  }
  return null;
}
