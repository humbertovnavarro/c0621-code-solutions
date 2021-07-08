/* exported capitalizeWord */
/*
  if word in all lower case is equal to javascript,
    return JavaScript
  return word at 0 in upper case, plus word from 1 to the end in lowercase
*/
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
