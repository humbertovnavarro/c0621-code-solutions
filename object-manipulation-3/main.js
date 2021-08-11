
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const players = [{ name: 'Ana', hand: [] }, { name: 'Jim', hand: [] }, { name: 'Joe', hand: [] }];
let winner = players[0];
function Deck() {
  this.cards = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = {};
      card.rank = ranks[j];
      card.suit = suits[i];
      card.value = (j > 7) ? 10 : Number.parseInt(card.rank);
      card.value = (card.rank === 'Ace') ? 11 : card.value;
      this.cards.push(card);
    }
  }
  this.cards = _.shuffle(this.cards);
}
const deck = new Deck();
players.forEach(player => {
  player.score = 0;
  player.hand.push(deck.cards.pop());
  player.hand.push(deck.cards.pop());
  player.hand.forEach(card => { player.score += card.value; });
  winner = (player.score > winner.score) ? player : winner;
});
console.log(`The winner is ${winner.name} with ${winner.score} points.`);
