/* exported swapFront */

function swapFront(list) {
  if(list.next === null) {
    return list;
  }
  const swap = list.data;
  list.data = list.next.data;
  list.next.data = swap;
  return list;
}
