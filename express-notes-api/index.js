const express = require('express');
const Entries = require('./entries');
const entries = new Entries(require('./data.json'));
const app = express();
const json = express.json();
app.use(json);

app.get('/api/notes', (req, res) => {
  res.json(entries.getAll());
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (id < 0 || Number.isNaN(id)) {
    res.statusCode = 400;
    res.json({ error: 'Id must be a positive integer' });
  }
  const entry = entries.notes[id];
  if (entry) {
    res.statusCode = 200;
    res.json(entry);
  } else {
    res.statusCode = 404;
    res.json({ error: 'Entry not found' });
  }
});

app.post('/api/notes/', (req, res) => {
  if (!req.body.content) {
    res.statusCode = 400;
    res.json({ error: 'No content included' });
  } else {
    const entry = entries.add(req.body);
    const error = entries.flush();
    if (error) {
      res.statusCode = 500;
      res.json({ error: 'An unexpected error occured.' });
    } else {
      res.statusCode = 201;
      res.json(entry);
    }
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (id < 0 || Number.isNaN(id)) {
    res.statusCode = 400;
    res.json({ error: 'Number must be a positive integer' });
  } else {
    const entry = entries.notes[id];
    if (!entry) {
      res.statusCode = 404;
      res.json({ error: `Entry ${id} not found` });
    } else {
      entries.deleteById(id);
      const error = entries.flush();
      if (error) {
        res.statusCode = 500;
        res.json({ error: 'An unexpected error occured.' });
      } else {
        res.statusCode = 204;
        res.send('');
      }
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const content = req.body.content;
  if (!content) {
    res.statusCode = 400;
    res.json({ error: 'Content is a required field.' });
  } else if (id < 0 || Number.isNaN(id)) {
    res.statusCode = 400;
    res.json({ error: 'Id must be a positive integer' });
  } else {
    const entry = entries.notes[id];
    if (!entry) {
      res.statusCode = 404;
      res.json({ error: `Entry ${id} not found` });
    } else {
      const sendEntry = entries.updateById(id, req.body);
      const error = entries.flush();
      if (error) {
        res.statusCode = 500;
        res.json({ error: 'An unexpected error occured.' });
      } else {
        res.statusCode = 200;
        res.json(sendEntry);
      }
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000');
});
