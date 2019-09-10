module.exports.books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 1,
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 2,
  },
  {
    id: 3,
    title: 'Jurassic Park The Origin',
    author: 2,
  },
];

module.exports.authors = [
  {
    id: 1,
    name: 'J.K. Rowling',
    books: [1],
  },
  {
    id: 2,
    name: 'Michael Crichton',
    books: [2],
  },
];
