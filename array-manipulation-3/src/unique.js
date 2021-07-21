/* exported unique */
function unique(array) {
  var output = [];
  var found = [];
  for(var i = 0; i < array.length; i++) {
    var unique = true;
    for(var j = 0; j < found.length; j++) {
      if(array[i] === found[j]) {
        unique = false;
      }
    }
    if(unique) {
      output.push(array[i]);
      found.push(array[i]);
    }
  }
  return output;
}
