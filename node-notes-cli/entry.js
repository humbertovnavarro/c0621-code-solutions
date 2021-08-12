class Entry {
  constructor(id, textContent) {
    this.id = id;
    this.textContent = textContent;
  }

  print() {
    console.log(`${this.id}: ${this.textContent}`);
  }

}
exports.Entry = Entry;
