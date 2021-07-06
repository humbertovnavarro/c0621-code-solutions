/* exported omit */
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
