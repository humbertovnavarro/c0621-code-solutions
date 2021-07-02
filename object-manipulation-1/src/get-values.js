/* exported getValues */
/*
  assign empty array to values
  for each key in object,
    append object at key to values
  return values

*/
function getValues(object){
  var values = [];
  for(var key in object){
    values.push(object[key]);
  }
  return values;
}
