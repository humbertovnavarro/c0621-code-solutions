/* exported titleCase */
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

function titleCase(string) {
  if (!string) {
    return;
  }
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
