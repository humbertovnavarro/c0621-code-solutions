/* exported getWords */

/*
  set word to empty string
  set words to empty array
  set i to zero
    while i is less than length of string,
      if string at is a space,
        add word to words
        set word to empty string
      otherwise
        set word to words plus string at i
      increment i by one
    if word is not empty
      add word to words
    return words

*/
function getWords(string){
  var word = '';
  var words = [];
  var i = 0;
  while(i < string.length){
    if(string[i] === " "){
      words.push(word);
      word = "";
    }
    else{
      word += string[i];
    }
    i++;
  }
  if(word){
    words.push(word)
  }
  return words;
}
