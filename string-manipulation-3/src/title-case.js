/* exported titleCase */
function titleCase(string){
  debugger;
  var i = 0;
  var output = "";
  var word = "";
  while(i < string.length){
    if (string[i] === " " || string[i] === "-"){
      output += capitalize(word);
      output += string[i];
      word = "";
    }
    else
    {
      word += string[i];
    }
    i++;
  }
  output += capitalize(word);
  return output;
}

function capitalize(string){
  var comparisonString = string.toLowerCase();
  //Chop off for purposes
  if(comparisonString[comparisonString.length] === ":"){
    comparisonString = comparisonString.substring(0,string.length - 1);
  }
  var exceptions = [
    'in',
    'for',
    'of',
    'the',
    'to'
  ];
  for(var i = 0; i < exceptions.length; i++){
    if(comparisonString === exceptions[i]){
      return string;
    }
  }
  switch(comparisonString){
    case 'javascript':
      return 'JavaScript';
    case 'api':
      return 'API';
    default:
      break;
  }
  return comparisonString[0].toUpperCase() + comparisonString.substring(1);
}
