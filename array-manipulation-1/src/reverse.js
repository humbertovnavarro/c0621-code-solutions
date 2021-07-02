/* exported reverse */

/*
  set reverse to empty array
  set i to length of the array minus one
  while i is greater than or equal to zero,
    append array at i to reverse
    decrement i
  return reverse;


*/
function reverse(array){
  var reverse = [];
  for(var i = array.length - 1; i >= 0; i--){
    reverse.push(array[i]);
  }
  return reverse;
}
