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
var challenge = NewChallenge('The quick brown fox jumps over the lazy dog.');
document.addEventListener('keydown', logKey);
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

function score() {
  challenge.wpm = Math.round(challenge.text.length / (challenge.time / 1000) * 60 / 5);
  var $reset = document.createElement('a');
  $reset.className = '.reset-button';
  $reset.href = 'index.html';
  var $header = document.createElement('h1');
  var $subHeader = document.createElement('h2');
  var $subSubHeader = document.createElement('h3');
  $subSubHeader.textContent = challenge.errors + ' error(s)';
  if (challenge.errors > 0) {
    $subSubHeader.className = 'red';
  } else {
    $subSubHeader.className = 'typed';
  }
  $subHeader.textContent = Math.round(challenge.time / 1000) + 's';
  $header.textContent = challenge.wpm + ' WPM';
  document.body.appendChild($header);
  document.body.appendChild($subHeader);
  document.body.appendChild($subSubHeader);
  document.body.appendChild($reset);
}
