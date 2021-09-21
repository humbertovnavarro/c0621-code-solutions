/* exported maxValue */

function maxValue(stack) {
  let numOne;
  let numTwo;
  let max = stack.pop();
  if(stack.peek() === undefined) {
    return -Infinity;
  }
  while(true) {
    const num = stack.pop();
    if(num === undefined) {
      return max;
    }
    if(num > max) {
      max = num;
    }
  }
  return max;
}
