/* exported filterOutStrings */
function filterOutStrings(values){
  var noString = [];
  for(var i = 0; i < values.length; i++){
    if(typeof values[i] !== "string"){
      noString.push(values[i]);
    }
  }
  return noString;
}
