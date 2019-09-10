const { find } = require('lodash');

const { books, authors } = require('../db');

const resolvers = {
  Query: {
    books: () => books,
    book(parent, args, context, info) {
      return find(books, { id: args.id });
    },
  },
  Book: {
    author(book) {
      return find(authors, { id: book.author })
    }
  },
}

module.exports = resolvers;