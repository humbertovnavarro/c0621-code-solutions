const express = require('express');
const path = require('path');
const staticPath = path.join(__dirname, 'public');
const app = express();
app.use(express.static(staticPath));
app.listen(3000, err => {
  console.error(err || 'Listening on *:3000');
});
