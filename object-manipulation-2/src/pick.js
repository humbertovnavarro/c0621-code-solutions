/* exported pick */

/*
  set output to empty object
  for each object in source
    for each key in keys
      if source at key is not equal to undefined
        for each pickKey in keys
          if pickKey is equal to key
           output at key equals source at key

*/

function pick(source, keys) {
  var object = {};
  for (var key in source) {
    if (source[key] !== undefined) {
      for (var i = 0; i < keys.length; i++) {
        if (keys[i] === key) {
          object[key] = source[key];
        }
      }
    }
  }
  return object;
}
