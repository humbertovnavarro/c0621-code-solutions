const takeAChance = require('./take-a-chance');
takeAChance('Humberto Navarro').then(
  result => console.log(result)
).catch(
  err => console.log(err)
);
