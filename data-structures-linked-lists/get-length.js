/* exported getLength */

function getLength(list) {
  let num = 1;
  let myList = list;
  while(myList.next !== null) {
    myList = myList.next;
    num++;
  }
  return num;
}
