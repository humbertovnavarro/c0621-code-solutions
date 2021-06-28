
// Student Object
var student = {
  firstName: 'Humberto',
  lastName: 'Navarro',
  age: 22
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Stocking Associate';
console.log('Value of livesInIrvine', student.livesInIrvine);
console.log('Value of previousOccupation', student.previousOccupation);

// Vehicle Object
var vehicle = {
  make: 'Tesla',
  model: 'Cybertruck',
  year: '2022'
};

vehicle['color'] = 'aluminium';
vehicle['isConvertible'] = false;
console.log('Value of vehicle[\'color\']', vehicle['color']);
console.log('Value of vehicle[\'isConvertible\']', vehicle['isConvertible']);
console.log('Value of vehicle', vehicle);

// Pet object
var pet = {
  name: 'Zeus',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('Value of pet', pet);
