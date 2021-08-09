const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
};

const { title, author, libraryID } = book1;
console.log('book1', `The title of the book is ${title}, the author is ${author}, and the library id is ${libraryID}`);

const book2 = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudelaire',
  libraryID: 2345
};

const { title: title2, author: author2, libraryID: libraryID2 } = book2;
console.log('book2', `The title of the book is ${title2}, the author is ${author2}, and the library id is ${libraryID2}`);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

const [book3, book4, book5] = library;

console.log('book3', `The title of the book is ${book3.title}, the author is ${book3.author}, and the library id is ${book3.libraryID}`);
console.log('book4', `The title of the book is ${book4.title}, the author is ${book4.author}, and the library id is ${book4.libraryID}`);
console.log('book5', `The title of the book is ${book5.title}, the author is ${book5.author}, and the library id is ${book5.libraryID}`);
const { 3: book6 } = library;
console.log('book6', `The title of the book is ${book6.title}, the author is ${book6.author}, and the library id is ${book6.libraryID}`);
