var heading = document.querySelector('h1');

function HelloThere() {
  heading.textContent = 'Hello There';
}

window.addEventListener('load', function(){
  setTimeout(HelloThere, 2000);
})
