/* exported includes */

function includes(list, value) {
  let myList = list;
  while (value !== myList.data) {
    if(myList.next === null) {
      return false;
    }
    myList = myList.next;
  }
  return true;
}
