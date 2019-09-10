const resolvers = {
  Query: {
    stock: async (_source, { id }, { dataSources }) => dataSources.stockAPI.getByProductId(id),
  },
  Stock: {
    product(stock, args, context) {
      // You can to access the variables of context
      const { user, token, dataSources } = context;

      console.log('user', user);
      console.log('token', token);
      if (!token) return null;

      return dataSources.productAPI.getById(stock.id);
    },
  },
};

module.exports = resolvers;
