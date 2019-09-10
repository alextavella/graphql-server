const resolvers = {
  Query: {
    product: async (_source, { id }, { dataSources }) => dataSources.productAPI.getById(id),
    products: async (_source, args, { dataSources }) => dataSources.productAPI.list(),
  },
};

module.exports = resolvers;
