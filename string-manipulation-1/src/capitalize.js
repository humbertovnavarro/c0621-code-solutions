/* exported capitalize */

/*
  create a function called capitilize that takes a word
  return word at zero, uppercase, plus the sub
  string from one onward, lowercase.
*/


function capitalize(word){
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
