function Table(numPlayers){
  var firstNames = ['Bobby','Cody','Paul','Juan','Maria','Josephina'];
  var lastNames = ['Navarro','Miller','Park','Smith','Jones','Carlos'];
  firstNames = _.shuffle(firstNames);
  lastNames = _.shuffle(lastNames);
  this.deck = new Deck();
  this.players = [];
  for(var i = 0; i < numPlayers; i++) {
    var name = firstNames.pop() + ' ' + lastNames.pop();
    this.players.push(new Player(name));
  }
  this.scoreOMT = function(){
    var winner = this.players[0];
    var highestScore = this.players[0].scoreOMT();
    for(var i = 0; i < this.players.length; i++) {
      var nextScore = this.players[i].scoreOMT();
      if(nextScore > highestScore) {
        highestScore = nextScore;
        winner = this.players[0];
      }
    }
    console.log('The winner is ' + winner.name);
  }
}

Table.prototype.dealAll = function(amount){
  if(amount > this.deck.length) {
    return;
  }
  for(var i = 0; i < amount; i++) {
    for(var j = 0; j < this.players.length; j++) {
      this.players[j].hand.push(this.deck.cards.pop());
    }
  }
};

function Player(name){
  this.hand = [];
  this.scorePoker = function(){
    var total = 0;
    for(var i = 0; i < this.hand.length; i++){
      total += this.hand[i].value;
    }
    return total;
  };
  this.name = name;
  this.scoreOMT = function(){
    var score = 0;
    for(var i = 0; i < this.hand.length; i++){
      var points = 0;
      if(this.hand[i].offset >= 13) {
        points = 11;
      }
      else if(this.hand[i].offset >= 10) {
        points = 10;
      } else {
        points = this.hand[i].offset + 1;
      }
      score += points;
    }
    return score;
  };
}

function Deck(){
  this.cards = []
  for(var i = 1; i <= 52; i++) {
    this.cards.push(new Card(i));
  }
  this.cards = _.shuffle(this.cards);
}

function Card(value) {
  this.value = value;
  var temp = 0;
  if(value  <= 13) {
    this.suite = 'Clubs';
  } else if(value <= 26){
    this.suite = 'Diamonds';
    temp = 13;
  } else if (value <= 39) {
    this.suite = 'Hearts'
    temp = 26;
  } else if(value <= 52) {
    this.suite = 'Spades';
    temp = 39;
  }
  offset = value - temp;
  if(offset === 1) {
    this.rank = 'Two';
  }
  if(offset === 2) {
    this.rank = 'Three';
  }
  if(offset === 3) {
    this.rank = 'Four';
  }
  if(offset === 4) {
    this.rank = 'Five';
  }
  if(offset === 5) {
    this.rank = 'Six';
  }
  if(offset === 6) {
    this.rank = 'Seven';
  }
  if(offset === 7) {
    this.rank = 'Eight';
  }
  if(offset === 8) {
    this.rank = 'Nine';
  }
  if(offset === 9) {
    this.rank = 'Ten';
  }
  if(offset === 10) {
    this.rank = 'Jack';
  }
  if(offset === 11) {
    this.rank = 'King'
  }
  if(offset === 12) {
    this.rank = 'Queen';
  }
  if(offset === 13) {
    this.rank = 'Ace';
  }
  this.offset = offset;
}

var table = new Table(4);
table.dealAll(2);
table.scoreOMT();
