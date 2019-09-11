const { RedisCache } = require('apollo-server-cache-redis');
const { redis } = require('../config/env');

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
  host: redis.host,
  port: redis.port,
  password: process.env.REDIS_PASSWORD || '',
});
