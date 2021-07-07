var light = true;
var $bulb = document.querySelector('.bulb');

function changeBulb() {
  if (light) {
    $bulb.className = 'bulb dark';
    document.body.className = 'page-dark';
  } else {
    $bulb.className = 'bulb light';
    document.body.className = 'page-light';
  }
  light = !light;
}
$bulb.addEventListener('click', changeBulb);
