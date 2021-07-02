/* exported tail */
/*
  set i to 1
  if array length is less than one,
    return empty array
  if array length is one,
    return the array
  while i is less than array length,
    append array at i to tail
    increment i by one
  return tail
*/


function tail(array){
  var tail = [];
  for(var i = 1; i < array.length; i++){
    tail.push(array[i]);
  }
  return tail;
}
