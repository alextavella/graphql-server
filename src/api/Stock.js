const { RESTDataSource } = require('apollo-datasource-rest');
const { api } = require('../config/env');

class StockAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${api.baseURL}/stock`;
  }

  async getByProductId(id) {
    return this.get(`/${id}`);
  }
}

module.exports = StockAPI;
