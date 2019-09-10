const resolvers = {
  Query: {
    stock: async (_source, { id }, { dataSources }) => {
      return dataSources.stockAPI.getByProductId(id);
    },
  },
  Stock: {
    product(stock, args, { dataSources }, info) {
      return dataSources.productAPI.getById(stock.id);
    }
  }
}

module.exports = resolvers;