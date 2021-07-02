/* exported isVowel */

/*
  create an array containing  all vowels called vowels,
    for each vowel in vowels,
      if vowel is in character to lower case,
        return true
    return false
*/
function isVowel(character){
  var vowels = ['a','e','i','o','u'];
  for(var i = 0; i < vowels.length; i++){
    if(vowels[i] === character.toLowerCase()){
      return true;
    }
  }
  return false;
}
