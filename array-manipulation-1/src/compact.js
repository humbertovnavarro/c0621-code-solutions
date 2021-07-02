/* exported compact */
/*
  set compact equal to empty array
  for each item in the array,
    if item is truthy
      append  item to compact
  return compact

*/
function compact(array){
  var compact = [];
  for(var i = 0; i < array.length; i++){
    if(array[i]){
      compact.push(array[i]);
    }
  }
  return compact;
}
