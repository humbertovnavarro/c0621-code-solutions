function convertMinutesToSeconds(minutes){
  return minutes * 60;
}

console.log('convertMinutesToSeconds Result:',convertMinutesToSeconds(5));

function greet(name){
  return 'Hey, ' + name;
}

console.log('greet Result:', greet('Humberto'));

function getArea(width, height){
  return width * height;
}

console.log('getArea Result:', getArea(10, 10));

function getFirstName(person){
  return person.firstName;
}

var testPerson = {
  firstName: 'Humberto',
  lastName: 'Navarro'
}
console.log('getFirstName result:', getFirstName(testPerson));

function getLastElement(array){
  return array[array.length - 1];
}

console.log('getLastElement result:',getLastElement(['one','two','three']));
