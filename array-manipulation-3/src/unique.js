/* exported unique */
function unique(array) {
  var output = [];
  for(var i = 0; i < array.length; i++) {
    if(inArray(array[i] > 2))
  }
}

function inArray(item, array) {
  var count = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] === item) {
      count++;
    }
  }
  return count;
}
