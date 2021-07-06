/* exported invert */
function invert(source, keys) {
  var object = {};
  for (var key in source) {
    object[source[key]] = key;
  }
  return object;
}
