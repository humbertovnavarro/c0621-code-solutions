/* exported includes */
/*
  set found equal to false
  for each index in array
    if index equals value
      set found to true
  return found

*/
function includes (array, value){
  var found = false;
  for(var i = 0; i < array.length; i++){
    if(array[i]  === value){
      found = true;
    }
  }
  return found;
}
