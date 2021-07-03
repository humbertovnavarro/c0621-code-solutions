/* exported take */
/*
  set output equal to empty array
  set i equal to zero
  if array count is greater than array length
    return empty array
  while i is less than count,
    append array at i to output
    increment i by  one
  return output

*/
function take(array,count){
  var output = [];
  if (count > array.length) {
    return [];
  }
  for(var i = 0; i < count; i++){
    output.push(array[i]);
  }
  return output;
}
