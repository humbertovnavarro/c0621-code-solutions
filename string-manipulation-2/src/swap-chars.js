/* exported swapChars */
/*
  set newstring to empty string
  set i to zero
  while zero is less than string length
    if i is equal to first index,
      append string at secondindex to newstring
    else if i is equal to second index,
      append string at firstindexto newstring
    else
      append string at i to newstring
  return newstring
*/



function swapChars(firstIndex,secondIndex,string){
  var newString = "";
  for(var i = 0; i < string.length; i++){
    if(i === firstIndex){
      newString += string[secondIndex];
    }
    else if(i === secondIndex){
      newString += string[firstIndex];
    }
    else{
      newString += string[i];
    }
  }
  return newString;
}
