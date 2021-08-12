module.exports =
class Entries {
  constructor(nextId, parsedNotes) {
    this.operations = {
      add: { regex: /^(a)$/, require: 1 },
      replace: { regex: /^(u|update|replace|rep)$/, require: 2 },
      delete: { regex: /^(rm|d|del|delete)$/, require: 1 },
      print: { regex: /^(p|print|read|)$/, require: 0 }
    };
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

  getValidationError(command, args) {
    const operation = this.operations[command];
    const error = `${command} is not a valid operation.`;
    if (!operation) {
      return error;
    }
    if (args.length < operation.require) {
      if (operation.require === 1) {
        return `missing arguments, ${command} takes one argument`;
      } else {
        return `missings arguments, ${command} takes ${operation.require} arguments`;
      }
    } else if (args.length > operation.require) {
      return 'too many arguments.';
    } else {
      return null;
    }
  }

  interpretCommand(command) {
    let output = command;
    if (!command) {
      return 'print';
    }
    for (const key in this.operations) {
      output = output.replace(this.operations[key].regex, key);
    }
    return output;
  }

  process(command, args) {
    const cmd = this.interpretCommand(command);
    const error = this.getValidationError(cmd, args);
    if (error) {
      return error;
    }
    switch (cmd) {
      case 'add':
        this.add(args[0]);
        break;
      case 'delete':
        this.deleteById(args[0]);
        break;
      case 'replace':
        this.updateById(args[0], args[1]);
        break;
      case 'print':
        this.readAll();
        break;
    }
    return null;
  }
};
