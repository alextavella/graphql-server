const { RESTDataSource, RequestOptions } = require('apollo-datasource-rest');
const { api } = require('../config/env');

class StockAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${api.baseURL}/stock`;
  }

  willSendRequest(request) {
    const { token } = this.context;

    if (token && token.accessToken) {
      request.headers.set('Authorization', `Bearer ${token.accessToken}`);
    }
  }

  async getByProductId(id) {
    return this.get(`/${id}`);
  }
}

module.exports = StockAPI;
