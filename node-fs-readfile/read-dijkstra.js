const fs = require('fs');

fs.readFile('dijkstra.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) throw err;
  console.log(data);
});
