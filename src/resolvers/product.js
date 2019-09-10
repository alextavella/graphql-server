const resolvers = {
  Query: {
    product: async (_source, { id }, { dataSources }) => {
      return dataSources.productAPI.getById(id);
    },
    products: async (_source, args, { dataSources }) => {
      return dataSources.productAPI.list();
    },
  }
}

module.exports = resolvers;