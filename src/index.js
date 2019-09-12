const { ApolloServer } = require('apollo-server');
const responseCachePlugin = require('apollo-server-plugin-response-cache');

const typeDefs = require('./config/types');
const context = require('./config/context');
// const cache = require('./config/cache');

const resolvers = require('./resolvers');
const dataSources = require('./api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  // cache,
  // plugins: [responseCachePlugin()],
  // tracing: true,
  // cacheControl: {
  //   defaultMaxAge: 60,
  //   stripFormattedExtensions: false,
  //   calculateCacheControlHeaders: false,
  // },
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
