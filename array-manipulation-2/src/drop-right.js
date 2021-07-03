/* exported dropRight */
/*
  set output equal to empty array
  set i equal to zero
  while i is less than array length minus count,
    append array at i to output
  return output
*/
function dropRight(array, count){
  var output = [];
  for(var i = 0; i < array.length - count; i++){
    output.push(array[i]);
  }
  return  output;
}
