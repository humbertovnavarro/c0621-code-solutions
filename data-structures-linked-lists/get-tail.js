/* exported getTail */

function getTail(list) {
  let myList = list;
  while(myList.next !== null) {
    myList = myList.next;
  }
  return myList.data;
}
