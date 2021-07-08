/* exported chunk */
/*
  set output equal to empty array
  set chunk equal to empty array
  set chunkCounter equal to zero
  set i equal to length of array
    while i is less than length of array
      append array at i to chunk
      increment chunkcounter by one
      if chunkCounter is euqal to size
        push chunk to output
    if chunk length greater thank zero
      append chunk to output
    return output
*/

function chunk(array, size) {
  var output = [];
  var chunk = [];
  var chunkCounter = 0;
  for (var i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    chunkCounter++;
    if (chunkCounter === size) {
      output.push(chunk);
      chunk = [];
      chunkCounter = 0;
    }
  }
  if (chunk.length > 0) {
    output.push(chunk);
  }
  return output;
}
