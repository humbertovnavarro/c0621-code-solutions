/* exported countdown */
function countdown(input){
  var numbers = []
  for(var i = input; i >= 0; i--){
    numbers.push(i);
  }
  return numbers;
}
