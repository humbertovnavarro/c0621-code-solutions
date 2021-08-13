const express = require('express');
const app = express();
app.use(function (req, res, next) {
  res.send('Hi');
  next();
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
