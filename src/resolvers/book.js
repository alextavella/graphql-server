const { filter } = require('lodash');

const resolvers = {
  Query: {
    books: async (_, __, { dataSources }) => dataSources.bookAPI.list(),
    book: async (_, { id }, { dataSources }) => dataSources.bookAPI.getById(id),
  },
  Mutation: {
    addBook: (_, args, { dataSources }, info) => {
      const payload = args;
      return dataSources.bookAPI.create({ payload });
    },
    removeBook: (_, { id }, { dataSources }) => {
      dataSources.bookAPI.remove(id);
      return { status: 'OK' };
    },
  },
  Book: {
    async author(book, _, { dataSources }) {
      const authors = await dataSources.authorAPI.list();
      return filter(authors, (author) => author.books.indexOf(book.id) >= 0);
    },
  },
};

module.exports = resolvers;
