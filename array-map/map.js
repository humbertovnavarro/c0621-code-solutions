function map(array, transform) {
  const outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== null && array[i] !== undefined) {
      outputArray.push(transform(array[i]));
    }
  }
  return outputArray;
}
