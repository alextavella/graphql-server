const { sortBy } = require('lodash');

const resolvers = {
  Query: {
    product: async (_, { id }, { dataSources }, info) => dataSources.productAPI.getById(id),
    products: async (_, { orderBy }, { dataSources }) => {
      const data = await dataSources.productAPI.list();

      if (orderBy) {
        const [field, direction] = orderBy.split('_');
        return (direction === 'DESC') ? sortBy(data, field).reverse() : sortBy(data, field);
      }

      return data;
    },
  },
  Mutation: {
    addProduct: (_, args, { dataSources }) => dataSources.productAPI.create({ payload: args }),
    updateProduct: (_, { id, ...payload }, { dataSources }) => dataSources.productAPI.update(id, { payload }),
    removeProduct: (_, { id }, { dataSources }) => dataSources.productAPI.remove(id),
  },
};

module.exports = resolvers;
