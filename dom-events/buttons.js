function handleClick(event) {
  console.log('button clicked');
}
var $buttonOne = document.querySelector('.click-button');
$buttonOne.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('Value of event:', event);
  console.log('Value of event target:', event.target);
}
var $buttonTwo = document.querySelector('.hover-button');
$buttonTwo.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('Value of event:', event);
  console.log('Value of event target:', event.target);
}
var $buttonThree = document.querySelector('.double-click-button');
$buttonThree.addEventListener('dblclick', handleDoubleClick);
