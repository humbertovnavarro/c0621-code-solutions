/* exported take2nd */

function take2nd(queue) {
  if(typeof queue.peek() === 'undefined') {
    return;
  }
  const first = queue.dequeue();
  const second = queue.dequeue();
  queue.enqueue(first);
  if(typeof second === 'undefined') {
    return first;
  } else {
    return second;
  }
}
