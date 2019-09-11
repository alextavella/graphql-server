const { RedisCache } = require('apollo-server-cache-redis');

module.exports = new RedisCache({
  connectTimeout: 5000,
  reconnectOnError: (err) => {
    console.log('Reconnect on error', err);
    const targetError = 'READONLY';
    if (err.message.slice(0, targetError.length) === targetError) {
      // Only reconnect when the error starts with "READONLY"
      return true;
    }
  },
  retryStrategy: (times) => {
    console.log('Redis Retry', times);
    if (times >= 3) {
      return undefined;
    }
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  socket_keepalive: false,
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT
    ? parseInt(process.env.REDIS_PORT, 10)
    : 6379,
  password: process.env.REDIS_PASSWORD || '',
});
