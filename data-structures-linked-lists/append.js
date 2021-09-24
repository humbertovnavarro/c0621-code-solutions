/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let myList = list;
  const newList = new LinkedList(value);
  while(myList.next !== null) {
    myList = myList.next;
  }
  myList.next = newList;
}
