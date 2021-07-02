/* exported getKeys */
/*
  assign empty array to keys
  for each key in object,
    append key to keys
  return keys

*/
function getKeys(object){
  var keys = [];
  for(var key in object){
    keys.push(key);
  }
  return keys;
}
