/* exported defaults */
/*
  for each key in source
    if target at key is undefined
      target at key equals source at key
*/

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
