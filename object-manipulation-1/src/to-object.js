/* exported toObject */
/*
  set object to object literal
  set object at keyvalue pair at zero, to key value pair at one
  return object

*/
function toObject(keyValuePair){
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
