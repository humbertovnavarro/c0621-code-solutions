const express = require('express');
const app = express();
const body = express.json();
app.use(body);
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  db.query(`
    select * from "grades"
  `).then(data => {
    const results = [];
    for (let i = 0; i < data.rows.length; i++) {
      results.push(data.rows[i]);
    }
    res.json(results);
  }).catch(err => {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error has occured.' });
  });
});

app.post('/api/grades', (req, res) => {
  const data = req.body;
  if (validateGrade(data)) {
    const params = [data.name, data.course, data.score];
    db.query(`
      insert into "grades" ("name", "course", "score")
      values
      ($1,$2,$3)
      returning *;
    `, params).then(data => {
      res.json(data.rows[0]);
    }).catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured' });
    });
  } else {
    res.status(400).json({ error: 'Invalid arguments' });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  if (!validateNumber(req.params.gradeId)) {
    res.status(400).json({ error: 'Invalid argument for gradeId' });
  }
  const data = req.body;
  if (validateGrade(data)) {
    const params = [data.name, data.course, data.score, req.params.gradeId];
    db.query(`
      update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *;
    `, params).then(data => {
      if (data.rows.length === 0) {
        res.status(404).json({ error: 'grade at gradeId not found' });
      } else {
        res.json(data.rows[0]);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured' });
    });
  } else {
    res.status(400).json({ error: 'Bad arguments' });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  if (!validateNumber(req.params.gradeId)) {
    res.status(400).json({ error: 'Inavlid argument for gradeId' });
  }
  db.query(`
    delete from "grades"
    where "gradeId" = $1
  `, [req.params.gradeId]).then(
    data => {
      if (data.rowCount === 0) {
        res.status(404).json({ error: 'grade not found' });
      } else {
        res.status(204);
      }
    }
  ).catch(
    err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error has occured' });
    }
  );
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});

function validateGrade(data) {
  if (data.name && data.course && validateNumber(data.score, 0, 100)) {
    return true;
  } else {
    return false;
  }
}

function validateNumber(number, min = 0, max = null) {
  const num = Number.parseInt(number, 10);
  if (Number.isNaN(num) || num < min) {
    return false;
  }
  if (max) {
    if (number > max) {
      return false;
    }
  }
  return true;
}
