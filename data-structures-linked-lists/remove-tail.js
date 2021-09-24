/* exported removeTail */

function removeTail(list) {
  let myList = list;
  let lastNode;
  let lastList;
  if(myList.next === null) {
    return;
  }
  while(myList.next !== null) {
    lastList = myList;
    myList = myList.next;
    if(myList.next === null) {
      lastList.next = null;
    }
  }

}
