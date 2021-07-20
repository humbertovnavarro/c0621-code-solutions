/* exported difference */
function difference(first, second) {
  var output = [];
  for(var i = 0; i < first.length; i++) {
    if(second.indexOf(first[i]) === -1) {
      output.push(first[i]);
    }
  }
  for(var i = 0; i < second.length; i++) {
    if(first.indexOf(second[i]) === -1) {
      output.push(second[i]);
    }
  }
  return output;
}
