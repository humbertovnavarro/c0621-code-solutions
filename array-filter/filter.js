function filter(array, predicate) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(predicate(array.length[i]));
  }
}
