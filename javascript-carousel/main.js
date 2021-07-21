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
generateDots();
var $dots = document.querySelectorAll('.carousel .fa-circle');
$dots[index].classList.replace('far', 'fas');
$carousel.addEventListener('click', handleCarouselClick);

var autoPan = setInterval(panImage, panSpeed);

function handleCarouselClick(event) {
  if (event.target.getAttribute('data-control') === 'left') {
    resetTimer();
    panImage('left');
  } else if (event.target.getAttribute('data-control') === 'right') {
    panImage('right');
    resetTimer();
  }
  if (event.target.getAttribute('data-control') === 'button') {
    resetTimer();
    setImage(event.target.getAttribute('data-index'));
  }
}

function resetTimer() {
  clearInterval(autoPan);
  autoPan = setInterval(panImage, panSpeed);
}

function setImage(newIndex) {
  var imageIndex = Number.parseInt(newIndex);
  $image.src = 'images/' + images[imageIndex];
  for (var i = 0; i < $dots.length; i++) {
    $dots[i].classList.replace('fas', 'far');
  }
  $dots[imageIndex].classList.replace('far', 'fas');
  index = imageIndex;
}

function generateDots() {
  for (var i = 0; i < images.length; i++) {
    // <i data-control="button" data-index="0" class="far fa-circle"></i>
    var $buttonContainer = document.querySelector('.button-container');
    var $dot = document.createElement('i');
    $dot.className = 'far fa-circle';
    $dot.setAttribute('data-control', 'button');
    $dot.setAttribute('data-index', i);
    $buttonContainer.appendChild($dot);
  }
}

function panImage(direction) {
  $dots[index].classList.replace('fas', 'far');
  if (direction === 'left') {
    if (index <= 0) {
      index = images.length - 1;
    } else {
      index--;
    }
  } else {
    if (index >= images.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }
  setImage(index);
}
