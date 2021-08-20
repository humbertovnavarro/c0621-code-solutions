function filter(array, predicate) {
  console.log('My filter');
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(predicate(array.length[i]));
  }
}
