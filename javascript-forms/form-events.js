function handleFocus(event) {
  console.log('Focus was fired.');
  console.log('Value of event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('Blur was fired.');
  console.log('Value of event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('Value of event.target.name:', event.target.name);
  console.log('Value of event.target.value:', event.target.value);
}

var $inputs = document.querySelectorAll('input');
var $textarea = document.querySelector('textarea');

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);

for (var i = 0; i < $inputs.length; i++) {
  $inputs[i].addEventListener('focus', handleFocus);
  $inputs[i].addEventListener('blur', handleBlur);
  $inputs[i].addEventListener('input', handleInput);
}
