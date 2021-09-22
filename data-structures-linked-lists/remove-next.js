/* exported removeNext */

function removeNext(list) {
  if(list.next === null) {
    return;
  }
  const next = list.next.next;
  list.next = next;
}
