/* exported invert */
/*
  set object equal to empty object
  for each key in source
    set object at (source at key) to key
  return object
*/
function invert(source, keys) {
  var object = {};
  for (var key in source) {
    object[source[key]] = key;
  }
  return object;
}
