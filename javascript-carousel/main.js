var images = [
  '001.png',
  '004.png',
  '007.png',
  '025.png',
  '039.png'
];

var panSpeed = 3000;
var index = 0;
var $carousel = document.querySelector('.carousel');
var $image = document.querySelector('.carousel img');
var $dots = document.querySelectorAll('.carousel .fa-circle');
$dots[index].classList.replace('far', 'fas');
$carousel.addEventListener('click', handleCarouselClick);

var autoPan = setInterval(panImage, panSpeed);
var coolDown = null;

function handleCarouselClick(event) {
  if (event.target.getAttribute('data-control') === 'left') {
    panImage('left');
  } else if (event.target.getAttribute('data-control') === 'right') {
    panImage('right');
  }
  clearInterval(autoPan);
  clearInterval(coolDown);
  coolDown = setTimeout(resumeAutoPan, panSpeed);
}

function panImage(direction) {
  $dots[index].classList.replace('fas', 'far');
  if (direction === 'left') {
    if (index === 0) {
      index = images.length - 1;
    } else {
      index--;
    }
  } else {
    if (index === images.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }
  $image.src = 'images/' + images[index];
  $dots[index].classList.replace('far', 'fas');
}

function resumeAutoPan() {
  autoPan = setInterval(panImage, panSpeed);
}
