/* exported reverseWords */

function reverseWords(string) {
  var reverse = '';
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    for (var x = words[i].length - 1; x >= 0; x--) {
      reverse += words[i][x];
    }
    if (i !== words.length - 1) {
      reverse += ' ';
    }
  }
  return reverse;
}
