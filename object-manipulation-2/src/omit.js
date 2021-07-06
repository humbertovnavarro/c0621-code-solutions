/* exported omit */
/*
  set object equal to empty object
  for key in source
    set omit to false
    set i to zero
    while i is less than length of keys
      if keys at i is strictly equal to key
        set omit equal to true
    if not omit
      set object at key to source at key
  return object
*/
function omit(source, keys) {
  var object = {};
  for (var key in source) {
    if (source[key] !== undefined) {
      var omit = false;
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
          omit = true;
        }
      }
      if (!omit) {
        object[key] = source[key];
      }
    }
  }
  return object;
}
