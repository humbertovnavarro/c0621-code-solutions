/* exported reverseWord */
/*
  set reverse equal to empty string
  set i equal to length of word minus 1,
  while i is greater than or equal to zero,
    add word at i to reverse
    decrement i by one
  return reverse
*/

function reverseWord(word){
  var reverse = "";
  for(var i = word.length - 1; i >= 0; i--){
    reverse += word[i];
  }
  return reverse;
}
