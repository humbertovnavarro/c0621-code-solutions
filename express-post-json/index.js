const express = require('express');
const app = express();
const grades = {};
let nextId = 1;
app.use(express.json());
app.post('/api/grades', (req, res) => {
  const grade = req.body;
  if (grade.name && grade.score && grade.course) {
    grade.id = nextId;
    grades[nextId] = grade;
    nextId++;
    res.status(201).json(grade);
  }
});
app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Started express');
});
