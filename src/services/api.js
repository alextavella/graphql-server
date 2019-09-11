const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:3333',
});

module.exports = instance;
