var challengeString = 'The quick brown fox jumps over the lazy dog.';
var challenge = NewChallenge(challengeString);

// Scoreboard
var $reset = document.createElement('button');
var $header = document.createElement('h1');
var $subHeader = document.createElement('h2');
var $subSubHeader = document.createElement('h3');

document.addEventListener('keydown', logKey);

function NewChallenge(string) {
  var challenge = {};
  challenge.complete = false;
  challenge.text = string;
  challenge.spans = [];
  challenge.charErrors = 0;
  challenge.time = 0;
  challenge.accuracy = 0;
  challenge.started = false;
  challenge.errors = 0;
  challenge.warned = false;
  challenge.div = document.querySelector('.challenge-container');
  document.body.appendChild(challenge.div);
  for (var i = 0; i < string.length; i++) {
    var $span = document.createElement('span');
    $span.textContent = string[i];
    challenge.spans.push($span);
    challenge.div.appendChild($span);
  }
  challenge.index = 0;
  return challenge;
}
function logKey(event) {
  if (event.key.length > 1 || challenge.complete) {
    return;
  }
  if (event.key === challenge.text[challenge.index]) {
    challenge.spans[challenge.index].className = 'typed';
    if (!challenge.started) {
      challenge.started = true;
      challenge.time = Date.now();
    }
    if (challenge.charErrors > 0) {
      challenge.errors++;
      challenge.charErrors = 0;
    }
    if (challenge.spans[challenge.index + 1] !== undefined) {
      challenge.spans[challenge.index + 1].className = 'cursor';
    }
    challenge.index++;
    if (challenge.index > challenge.text.length - 1) {
      challenge.complete = true;
      challenge.time = Date.now() - challenge.time;
      score();
    }
  } else {
    challenge.charErrors++;
    if (challenge.charErrors <= 1) {
      challenge.spans[challenge.index].className = 'cursor error';
    } else if (challenge.charErrors < 2) {
      challenge.spans[challenge.index].className = 'cursor big error';
    } else if (challenge.charErrors < 4) {
      challenge.spans[challenge.index].className = 'cursor chunky error';
    } else if (challenge.charErrors < 6) {
      challenge.spans[challenge.index].className = 'cursor huge error';
    }
  }
}

function reset(event) {
  challenge.div.innerHTML = '';
  challenge = NewChallenge(challengeString);
  $header.remove();
  $subHeader.remove();
  $subSubHeader.remove();
  $reset.remove();
}

function score() {
  challenge.wpm = Math.round(challenge.text.length / (challenge.time / 1000) * 60 / 5);
  $reset.addEventListener('click', reset);
  $reset.className = 'reset-button';
  $reset.textContent = 'RESET';
  if (challenge.errors > 1) {
    $subSubHeader.className = 'red';
    $subSubHeader.textContent = challenge.errors + ' errors';
  } else if (challenge.errors <= 0) {
    $subSubHeader.className = 'typed';
    $subSubHeader.textContent = challenge.errors + ' errors';
  } else {
    $subSubHeader.textContent = challenge.errors + ' error';
  }
  $subHeader.textContent = Math.round(challenge.time / 1000) + 's';
  $header.textContent = challenge.wpm + ' WPM';
  document.body.appendChild($header);
  document.body.appendChild($subHeader);
  document.body.appendChild($subSubHeader);
  document.body.appendChild($reset);
}
