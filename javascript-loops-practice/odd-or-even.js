/* exported oddOrEven */
function oddOrEven(numbers){
  var isOddOrEven = [];
  for(var i = 0; i < numbers.length; i++){
    if(typeof numbers[i] !== "number"){
      isOddOrEven.push("NaN");
    }
    else if(numbers[i] % 2 === 0){
      isOddOrEven.push("even");
    }
    else{
      isOddOrEven.push("odd");
    }
  }
  return isOddOrEven;
}
