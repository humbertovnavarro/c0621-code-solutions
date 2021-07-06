var $button = document.querySelector('.hot-button');
var count = 0;
var $clickCount = document.querySelector('.click-count');

$button.addEventListener('click', function () {
  count++;
  $clickCount.textContent = 'Clicks: ' + count;
  if (count < 4) {
    $button.className = 'hot-button cold';
  } else if (count < 7) {
    $button.className = 'hot-button cool';
  } else if (count < 10) {
    $button.className = 'hot-button tepid';
  } else if (count < 13) {
    $button.className = 'hot-button warm';
  } else if (count < 16) {
    $button.className = 'hot-button hot';
  } else {
    $button.className = 'hot-button nuclear';
  }
});
