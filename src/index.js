const { ApolloServer } = require('apollo-server');

const typeDefs = require('./config/types');
const context = require('./config/context');
const cache = require('./config/cache');

const resolvers = require('./resolvers');
const dataSources = require('./api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  cache,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
