var fs = require('fs');
module.exports =
class Entries {
  constructor(data) {
    this.nextId = data.nextId || 0;
    this.notes = data.notes;
  }

  getAll() {
    const arr = [];
    for (const key in this.notes) {
      arr.push(this.notes[key]);
    }
    return arr;
  }

  add(content) {
    this.notes[this.nextId] = content;
    this.notes[this.nextId].id = this.nextId;
    this.nextId++;
    this.changes = true;
    return this.notes[this.nextId - 1];
  }

  updateById(noteId, content) {
    this.notes[noteId] = content;
    this.notes[noteId].id = noteId;
    this.changes = true;
    return this.notes[noteId];
  }

  deleteById(noteId) {
    delete this.notes[noteId];
    this.changes = true;
  }

  // Saves the current state of the notes to a file
  flush(callback) {
    if (!this.changes) {
      return;
    }
    const data = {
      nextId: this.nextId,
      notes: this.notes
    };
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => { callback(err); });
  }
};
