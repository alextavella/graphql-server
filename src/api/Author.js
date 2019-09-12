const { RESTDataSource } = require('apollo-datasource-rest');
const { api } = require('../config/env');

class AuthorAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${api.baseURL}/authors`;
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

  async delete(id) {
    return this.delete(`/${id}`);
  }
}

module.exports = AuthorAPI;
