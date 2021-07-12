var library = [
  {
    isbn: '43782910471',
    title: 'JavaScript & Jquery',
    author: 'Duckett, John'
  },
  {
    isbn: '437829104712',
    title: 'HTML & CSS',
    author: 'Duckett, John'
  },
  {
    isbn: '437829104715',
    title: 'The Cat and the Hat',
    author: 'Dr. Seuss'
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
