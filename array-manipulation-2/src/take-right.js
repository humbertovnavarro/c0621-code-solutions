/* exported takeRight */
/*
  set output equal to empty array
  set i equal to array to different of array length and count
  while i is  less then array length minus count
    append array at i to output
  return output
*/

function takeRight(array,count){
  var output = [];
  if(count > array.length){
    return [];
  }
  for(var i = array.length - count; i < array.length; i++){
    output.push(array[i]);
  }
  return output;
}
