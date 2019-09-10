const { RESTDataSource } = require('apollo-datasource-rest');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3333/products';
  }

  async list() {
    return this.get('/');
  }

  async getById(id) {
    return this.get(`/${id}`);
  }
}

module.exports = ProductAPI;