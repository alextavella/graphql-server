const { RESTDataSource } = require('apollo-datasource-rest');

class StockAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3333/stock';
  }

  async getByProductId(id) {
    return this.get(`/${id}`);
  }
}

module.exports = StockAPI;
