const { filter } = require('lodash');

const resolvers = {
  Query: {
    authors: async (_, __, { dataSources }) => dataSources.authorAPI.list(),
    author: async (_, { id }, { dataSources }) => dataSources.authorAPI.getById(id),
  },
  Mutation: {
    addAuthor: (_, args, { dataSources }) => {
      console.log(args);
      return dataSources.authorAPI.create({ payload: args });
    },
    removeAuthor: (_, { id }, { dataSources }) => {
      dataSources.authorAPI.remove(id);
      return { status: 'OK' };
    },
  },
  Author: {
    async books(author, _, { dataSources }) {
      const books = await dataSources.bookAPI.list();
      return filter(books, (book) => author.books.indexOf(book.id) >= 0);
    },
  },
};

module.exports = resolvers;
