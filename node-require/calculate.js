const operations = {
  add: require('./add').add,
  subtract: require('./subtract').subtract,
  multiply: require('./multiply').multiply,
  divide: require('./divide').divide
};
if (process.argv.length < 3) {
  console.log('Usage: node calculate.js <numA> <operation keyword> <numB>');
  process.exit(1);
}
let opString = process.argv[3];
opString = opString.toLowerCase();
opString = opString.replace('plus', 'add');
opString = opString.replace('minus', 'subtract');
opString = opString.replace('times', 'multiply');
const numA = Number.parseInt(process.argv[2]);
const numB = Number.parseInt(process.argv[4]);
const result = operations[opString](numA, numB);
console.log(result);
