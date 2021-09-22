/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  const second = queue.dequeue();
  if(typeof first === 'undefined') {
    return;
  }
  if (typeof second === 'undefined') {
    return first;
  }
  if(first < second) {
    queue.enqueue(second);
    return first;
  } else {
    queue.enqueue(first);
    return second;
  }
}
