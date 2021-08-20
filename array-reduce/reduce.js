function reduce(array, reducer, initialValue) {
  const keys = Object.keys(array);
  if (keys.length === 0 && !initialValue) {
    return new TypeError();
  }
  let previousValue;
  let currentValue;
  let currentIndex;
  let start = 0;
  let output;
  if (initialValue) {
    previousValue = initialValue;
    currentValue = array[keys[0]];
  } else {
    previousValue = array[keys[0]];
    currentValue = array[keys[1]];
    start = 1;
  }
  for (let i = start; i < keys.length; i++) {
    currentValue = array[keys[i]];
    previousValue = reducer(previousValue, currentValue, keys[i], array);
  }
  return previousValue;
}
