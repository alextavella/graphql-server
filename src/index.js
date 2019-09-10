const { ApolloServer } = require('apollo-server');

const typeDefs = require('./types');
const resolvers = require('./resolvers');
const dataSources = require('./api');
const context = require('./context');

const server = new ApolloServer({
  typeDefs, resolvers, dataSources, context,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
