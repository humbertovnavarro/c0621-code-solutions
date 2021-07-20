var heading = document.querySelector('h1');
var count = 4;
var myCountDown = setInterval(countDown, 1000)
function countDown() {
  if(count > 0) {
    heading.textContent = count;
    count--;
  }
  else {
    heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(myCountDown);
  }
}
