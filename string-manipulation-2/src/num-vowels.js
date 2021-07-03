/* exported numVowels */
/*
  set numVowels to zero
  for each character in string
    for each vowel in vowels,
      if character is equal to vowel,
        increment numVowels

*/


function numVowels(string){
  var numVowels = 0;
  var vowels = ['a','e','i','o','u'];
  for(var i = 0; i < string.length; i++){
    for(var x = 0; x < vowels.length; x++){
      if(string[i].toLowerCase() === vowels[x]){
        numVowels++;
      }
    }
  }
  return numVowels;
}
