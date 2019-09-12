const { gql } = require('apollo-server');

module.exports = gql`
  type Product @cacheControl(maxAge: 50) {
    id: ID!
    title: String! @cacheControl(maxAge: 100)
    price: Float!
    image: String
  }

  type Stock {
    product: Product
    amount: Int!
  }

  type Status {
    status: String!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    product(id: Int): Product
    products(orderBy: String): [Product]
    stock(id: Int): Stock
  }

  type Mutation {
    addProduct(title: String!, price: Float!, image: String): Product
    updateProduct(id: Int!, title: String!, price: Float!, image: String): Product
    removeProduct(id: Int!): Status!
  }
`;
