const { ApolloServer } = require('apollo-server');

const typeDefs = require('./config/types');
const context = require('./config/context');

const resolvers = require('./resolvers');
const dataSources = require('./api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
