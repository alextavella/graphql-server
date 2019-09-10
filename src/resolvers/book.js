const { find } = require('lodash');

const { books, authors } = require('../db');

const resolvers = {
  Query: {
    books: () => books,
    book(parent, args, context, info) {
      return find(books, { id: args.id });
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      console.log('Creating book:', args);

      const { title, author } = args;
      const result = { title, author };

      console.log('result', result);
      return result;
    },
  },
  Book: {
    author(book) {
      return find(authors, { id: book.author });
    },
  },
};

module.exports = resolvers;
