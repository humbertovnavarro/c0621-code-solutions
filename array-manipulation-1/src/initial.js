/* exported initial */

/*
  set initial to empty array
  set i to 0
  while i is less than array length minus one,
    append array at i to initial
  return initial
*/

function initial(array){
  var initial = [];
  for (var i = 0; i < array.length - 1; i++) {
    initial.push(array[i]);
  }
  return initial;
}
