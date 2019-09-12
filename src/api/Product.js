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

  async create({ payload }) {
    return this.post('/', payload);
  }

  async update(id, { payload }) {
    return this.put(`/${id}`, payload);
  }

  async remove(id) {
    await this.delete(`/${id}`);
    return { status: 'OK' };
  }
}

module.exports = ProductAPI;
