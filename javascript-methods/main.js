var one = 1;
var two = 2;
var three = 3;
var maximumValue = Math.max(one,two,three);
console.log('Value of maximumValue:',maximumValue);
var heroes = ['Doctor Strange','Deku','Iron Man', 'Captain America'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:',randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero:',randomHero);
var library = [
  {
    title: 'For Whom The Bell Tolls',
    author: 'Ernest Hemingway'
  },
  {
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: 'A Descent Into The Maelstrom',
    author: 'Edgar Allan Poe'
  }
]
var lastBook = library.pop();
console.log('Value of lastBook',lastBook);
var firstBook = library.shift();
console.log('Value of firstBook:',firstBook);

var js = {
  title: 'JavaScript for Impatient Programmer',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title:'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1,1);
console.log('Value of library:',library);

var fullName = "Humberto Navarro";
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName',firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:',sayMyName);
