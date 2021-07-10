var library = [
  {
    isbn: '',
    title: '',
    author: ''
  },
  {
    isbn: '',
    title: '',
    author: ''
  },
  {
    isbn: '',
    title: '',
    author: ''
  }
];
console.log('Value of library:', library);
console.log('Type of library:', typeof library);
console.log('Value of JSON.stringify(library):', JSON.stringify(library));
console.log('Type of JSON.stringify(library):', typeof JSON.stringify(library));
var student = '{"id": 10, "name": "humberto"}';
console.log('Type of student:', typeof student);
var studentObject = JSON.parse(student);
console.log('Value of studentObject', studentObject);
