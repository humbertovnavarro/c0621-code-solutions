/* exported countValues */

function countValues(stack) {
  let count = 0;
  let empty = false;
  let value;
  while(!empty) {
    value = stack.pop();
    if (value === undefined) {
      empty = true;
    } else {
      count++;
    }
  }
  return count;
}
