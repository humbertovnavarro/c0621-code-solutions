/* exported isPalindromic */
/*
  set i equal to string length
  set reverse equal to empty string
  while i is greater than zero
    append string at i to reverse
    decrement i
  if reverse with  no spaces is strictly equal to string with no spaces
    return true
  return false

*/
function isPalindromic(string) {
  var reverse = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  if (reverse.replace(' ', '') === string.replace(' ', '')) {
    return true;
  }
  return false;
}
