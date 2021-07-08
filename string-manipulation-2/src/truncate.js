/* exported truncate */
/*
  return string from zero, to length, plus "..."
*/
function truncate(length, string) {
  return string.substring(0, length) + '...';
}
