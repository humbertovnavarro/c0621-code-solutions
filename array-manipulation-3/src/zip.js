/* exported zip */
function zip(first,second) {
  var out = [];
  var pair = [];
  var smallest = second.length;
  if (first.length < second.length ) {
    smallest = first.length;
  }
  for(var i = 0; i < smallest; i++) {
    pair.push(first[i]);
    pair.push(second[i]);
    out.push(pair);
    pair = [];
  }
  console.log('Value of out:', out);
  return out;
}
