const { find, filter } = require('lodash');

const { books, authors } = require('../db');

const resolvers = {
  Query: {
    authors: () => authors,
    author(parent, { id }, context, info) {
      return find(authors, { id });
    },
  },
  Author: {
    books(author) {
      return filter(books, { author: author.id });
    },
  },
};

module.exports = resolvers;
