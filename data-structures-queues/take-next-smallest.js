/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  console.log(queue.print());
  let found = false;
  let first = queue.dequeue();
  let second = queue.peek();
  if(typeof first === 'undefined') {
    return;
  }
  if(typeof second === 'undefined') {
    return first;
  }
  if (first <= second) {
    return first;
  }
  queue.enqueue(first);
  while(true) {
    first = queue.dequeue();
    second = queue.peek();
    if (first <= second) {
      return first;
    }
    queue.enqueue(first);
  }
}
