var $modal = document.querySelector('.modal');
var $showModalButton = document.querySelector('.purple-button');
var $hideModalButton = document.querySelector('.red-button');

function showModal() {
  $modal.className = 'modal visible';
}
function hideModal() {
  $modal.className = 'modal hidden';
}

$showModalButton.addEventListener('click', showModal);
$hideModalButton.addEventListener('click', hideModal);
