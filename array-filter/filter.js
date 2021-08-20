function filter(array, predicate) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const includes = predicate(array[i]);
    if (includes) {
      output.push(array[i]);
    }
  }
  return output;
}
