/* exported ransomCase */
/*
  set ransom equal to empty string
  set i equal to zero
  while i is less than string length
    if the modulus of i is equal to zero
      add string at i but lowercase to ransom
    else
      add string at i but uppercase to ransom
  return ransom

*/
function ransomCase(string) {
  var ransom = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom += string[i].toLowerCase();
    } else {
      ransom += string[i].toUpperCase();
    }
  }
  return ransom;
}
