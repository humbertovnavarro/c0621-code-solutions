/* exported isUpperCased */

/*
create a function that takes one argument word
  if word is equal to itself but in all caps,
    return true
  otherwise,
    return false
*/

function isUpperCased(word){
  if(word == word.toUpperCase()){
    return true;
  }
  else{
    return false;
  }
}
