const resolvers = {
  Query: {
    product: async (_, { id }, { dataSources }, info) => dataSources.productAPI.getById(id),
    products: async (_, __, { dataSources }, info) => dataSources.productAPI.list(),
  },
};

module.exports = resolvers;
