function map(array, transform) {
  const outputArray = [];
  for (let i = 0; i < array.length; i++) {
    outputArray.push(transform(array[i]));
  }
  return outputArray;
}
