var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

function handleTabClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var i = 0; i < $tabs.length; i++) {
    if ($tabs[i] === event.target) {
      event.target.className = 'tab active';
    } else {
      $tabs[i].className = 'tab';
    }
  }
  var dataView = event.target.getAttribute('data-view');
  for (var ii = 0; ii < $views.length; ii++) {
    if ($views[ii].getAttribute('data-view') === dataView) {
      $views[ii].className = 'view';
    } else {
      $views[ii].className = 'view hidden';
    }
  }
}
$tabContainer.addEventListener('click', handleTabClick);
