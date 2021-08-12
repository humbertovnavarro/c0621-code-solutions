module.exports =
class Entries {
  constructor(nextId, parsedNotes) {
    this.nextId = nextId;
    this.notes = parsedNotes;
    this.changes = false;
  }

  readAll() {
    let output = '';
    for (const key in this.notes) {
      const data = this.notes[key];
      output += `${key}: ${data} \n`;
    }
    console.log(output);
  }

  add(content) {
    this.notes[this.nextId] = content;
    this.nextId++;
    this.changes = true;
  }

  updateById(noteId, content) {
    this.notes[noteId] = content;
    this.changes = true;
  }

  deleteById(noteId) {
    delete this.notes[noteId];
    this.changes = true;
  }

  serialize() {
    const data = {
      nextId: this.nextId,
      notes: this.notes
    };
    return JSON.stringify(data, null, 2);
  }

};
