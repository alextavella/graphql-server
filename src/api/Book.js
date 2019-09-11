const { RESTDataSource } = require('apollo-datasource-rest');
const { api } = require('../config/env');

class BookAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${api.baseURL}/books`;
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

  async remove(id) {
    return this.delete(`/${id}`);
  }
}

module.exports = BookAPI;
