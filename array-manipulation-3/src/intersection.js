/* exported intersection */
function intersection (first, second) {
  var output = [];
  for(var i = 0; i < first.length; i++) {
    if(second.indexOf(first[i]) > -1) {
      output.push(first[i]);
    }
  }
  return output;
}
