/* exported flatten */
function flatten(array){
  var flat = [];
  for(var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      for(var j = 0; j < array[i].length; j++) {
        flat.push(array[i][j]);
      }
    }
    else {
      flat.push(array[i]);
    }
  }
  return flat;
}
