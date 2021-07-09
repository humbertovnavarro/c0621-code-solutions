/* exported titleCase */
// check if the string is a minor word, return true if true, otherwise return false
function isMinorWord(string) {
  if (!string) {
    return;
  }
  switch (string.toLowerCase()) {
    case 'and':
      return true;
    case 'or':
      return true;
    case 'nor':
      return true;
    case 'but':
      return true;
    case 'a':
      return true;
    case 'an':
      return true;
    case 'the':
      return true;
    case 'as':
      return true;
    case 'at':
      return true;
    case 'by':
      return true;
    case 'for':
      return true;
    case 'in':
      return true;
    case 'of':
      return true;
    case 'on':
      return true;
    case 'per':
      return true;
    case 'to':
      return true;
    default:
      return false;
  }
}
/*
  iterate through each index of the string,
    if we encounter a delimeter,
      check if we have a force space in the queue,
        if we do decrement force by one
      if we encounter a colon
        add two force space onto the queue
      else if we encounter a space,
        set the addon to space
      else if we encounter a dash
      add two force space onto the queue
      set addon to dash
      if we are on the first word, or we have force in qeue,
        capitalize the first word with force set to true and append to output
      else
        capitlize the first word with force set to false and append to output
      set the word to empty string
    else
      add string at i to word
    add the remaining word but capitalized to output

*/

function titleCase(string) {
  var word = '';
  var output = '';
  var first = true;
  var force = 0;
  var addOn = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ' || string[i] === ':' || string[i] === '-') {
      addOn = '';
      if (force > 0) {
        force--;
      }
      if (string[i] === ':') {
        force += 2;
        addOn = ': ';
        i++;
      } else if (string[i] === ' ') {
        addOn = ' ';
      } else if (string[i] === '-') {
        force += 2;
        addOn = '-';
      }
      if (first || force > 0) {
        output += capitalize(word, true) + addOn;
        first = false;
      } else {
        output += capitalize(word, false) + addOn;
      }
      word = '';
    } else {
      word += string[i];
    }
  }
  output += capitalize(word);
  return output;
}
// Capitalize according to title format.
function capitalize(string, force = false) {
  if (!string) {
    return;
  }
  var compare = string.toLowerCase();
  if (compare === 'javascript') {
    return 'JavaScript';
  }
  if (compare === 'api') {
    return 'API';
  }
  if (force) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
  } else if (!isMinorWord(string)) {
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
  }
  return string.toLowerCase();
}
