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
    res.json({ error: `Entry ${id} not found` });
  }
});

app.post('/api/notes/', (req, res) => {
  if (!req.body.content) {
    res.statusCode = 400;
    res.json({ error: 'No content included' });
  } else {
    const sendEntry = entries.add(req.body);
    const callback = error => {
      if (error) {
        res.statusCode = 500;
        res.json({ error: 'An unexpected error occured.' });
      } else {
        res.statusCode = 201;
        res.json(sendEntry);
      }
    };
    entries.flush(callback);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (id < 0 || Number.isNaN(id)) {
    res.statusCode = 400;
    res.json({ error: 'id must be a positive integer' });
  } else {
    const entry = entries.notes[id];
    if (!entry) {
      res.statusCode = 404;
      res.json({ error: `Entry ${id} not found` });
    } else {
      entries.deleteById(id, req.body);
      const callback = error => {
        if (error) {
          res.statusCode = 500;
          res.json({ error: 'An unexpected error occured.' });
        } else {
          res.statusCode = 204;
          res.send('');
        }
      };
      entries.flush(callback);
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
      const callback = error => {
        if (error) {
          res.statusCode = 500;
          res.json({ error: 'An unexpected error occured.' });
        } else {
          res.statusCode = 200;
          res.json(sendEntry);
        }
      };
      entries.flush(callback);
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000');
});
