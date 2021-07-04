/* exported isAnagram */

//Compare the strings and return false if a disqualification is found
function isAnagram(firstString,secondString){
  var stringOne = getOccurences(firstString);
  var stringTwo = getOccurences(secondString);
  if(sameValues(stringOne,stringTwo)){
    return true;
  }
  return false;
}

function sameValues(objectOne,objectTwo){
  for(var key in objectOne){
    if(objectTwo[key] === undefined){
      return false;
    }
    if(objectTwo[key] !== objectOne[key]){
      return false;
    }
  }
  return true;
}


//Create an object of the string with chars and the number of occurences sans space
function getOccurences(string){
  var occurences = {};
  for (var i = 0; i < string.length; i++) {
    if(string[i] !== " "){
      if (occurences[string[i]] === undefined) {
        occurences[string[i]] = 1;
      }
      else {
        occurences[string[i]]++;
      }
    }
  }
  return occurences;
}
