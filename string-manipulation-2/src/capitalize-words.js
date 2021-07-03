/* exported capitalizeWords */
/*
  set output to empty string
  set word to empty string
  set words equal to empty array
  set i equal to zero
  while i is less than string length,
      add string at i to word
    if string at i is space,
      add word at zero but uppercase added to the substring from 1 onward but lowercase
      set word to empty string
  if word is not empty
    append word to words
*/


function  capitalizeWords(string){
  var output = "";
  var word = "";
  var i = 0;
  debugger;
  while(i < string.length){
    word += string[i];
    if(string[i] ===  " "){
      output += word[0].toUpperCase() + word.substring(1).toLowerCase();
      word = "";
    }
    i++;
  }
  output += word[0].toUpperCase() + word.substring(1).toLowerCase();
  return output;
}
