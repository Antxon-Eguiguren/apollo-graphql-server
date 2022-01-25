const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Product } = require('./resolvers/Product');
const { Category } = require('./resolvers/Category');
const { Mutation } = require('./resolvers/Mutation');
const { db } = require('./db');

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation, Product, Category },
  context: { db },
});
server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
