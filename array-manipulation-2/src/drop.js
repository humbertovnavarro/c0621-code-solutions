/* exported drop */
/*
  set output equal to empty array
  set i equal to count
    while i is less than array length
      push  array at i to output
  return output
*/
function drop(array,count){
  var output = [];
  for(var i = count; i < array.length; i++){
    output.push(array[i]);
  }
  return output;
}
