const { RESTDataSource } = require('apollo-datasource-rest');
const { api } = require('../config/env');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${api.baseURL}/products`;
  }

  async list() {
    return this.get('/');
  }

  async getById(id) {
    return this.get(`/${id}`);
  }
}

module.exports = ProductAPI;
