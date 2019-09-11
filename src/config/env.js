module.exports = {
  api: {
    baseURL: process.env.API_BASE_URL || 'localhost:3333',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT
      ? parseInt(process.env.REDIS_PORT, 10)
      : 6379,
  },
};
