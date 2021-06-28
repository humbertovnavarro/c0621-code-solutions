var colors = [
  'red',
  'white',
  'blue'
];

for (var i = 0; i < colors.length; i++) {
  console.log('Value of colors[' + i + ']: ', colors[i]);
}

var america = 'America is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2];
console.log(america);

colors[3] = 'green';
var mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2];
console.log(mexico);
console.log('Value of colors:', colors);

var students = [
  'Jimmy',
  'Jordan',
  'Jacky',
  'Joey'
];

var numberOfStudents = students.length;
var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];
console.log('Value of lastStudent:', lastStudent);
console.log('Value of students:', students);
