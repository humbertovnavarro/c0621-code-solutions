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

  delete() {
    delete data.notes[this.id];
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

const [first, second, third] = args;
if (first === 'read' || args.length === 0 || first === 'r') {
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
} else if (first === 'add' || first === 'a' || first === 'create') {
  if (!second) {
    console.error('Missing notes argument.');
    process.exit(1);
  } else {
    const entry = new Entry(data.nextId, second);
    data.nextId++;
    entry.serialize();
    process.exit(0);
  }
} else if (first === 'delete' || first === 'd' || first === 'remove') {
  const entry = findId(second);
  if (entry) {
    entry.delete();
    process.exit(0);
  } else {
    console.error('No such entry.');
    process.exit(1);
  }
} else if (first === 'update' || first === 'u' || first === 'edit') {
  if (!second) {
    console.error('You need to specify an entry.');
    process.exit(1);
  }
  if (!third) {
    console.error('Please add new notes.');
    process.exit(1);
  }
  const entry = findId(second);
  entry.textContent = third;
  entry.serialize();
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
