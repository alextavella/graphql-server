const resolvers = {
  Query: {
    product: async (_, { id }, { dataSources }, info) => dataSources.productAPI.getById(id),
    products: async (_, __, { dataSources }, info) => dataSources.productAPI.list(),
  },
  Mutation: {
    addProduct: (_, args, { dataSources }) => dataSources.productAPI.create({ payload: args }),
    updateProduct: (_, { id, ...payload }, { dataSources }) => dataSources.productAPI.update(id, { payload }),
    removeProduct: (_, { id }, { dataSources }) => dataSources.productAPI.remove(id),
  },
};

module.exports = resolvers;
