/* exported titleCase */
function capitalize(string, firstWord = false) {
  var testString = string.toLowerCase();
  if (testString === 'javascript') {
    return 'JavaScript';
  }
  if (testString === 'api') {
    return 'API';
  }
  if (!firstWord) {
    if (isMinorWord(string)) {
      return string;
    }
  }
  return string[0].toUpperCase() + string.substring(1);
}

function isMinorWord(string) {
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

function titleCase(string) {
  var output = '';
  var tempWord = '';
  var tempWords = [];
  var words = string.split(' ');
  for (var i = 0; i < string.length; i++) {
    if (words[i].indexOf(':') !== -1) {
      tempWord = words[i].substring(0, words[i].length - 2);
      words[i + 1] = capitalize(words[i + 1]);
      tempWord += ':';
      words[i] = tempWord;
    } else if (words[i].indexOf('-') !== -1) {
      tempWords = words[i].split('-');
      tempWord = '';
      tempWord = capitalize(tempWords[0]) + '-' + capitalize(tempWords[1]);
      words[i] = tempWord;
    } else if (i === 0) {
      words[0] = capitalize(words[0], true);
    }
    output += words[i];
    if (i < string.length - 1) {
      output += ' ';
    }
  }
  return output;
}
