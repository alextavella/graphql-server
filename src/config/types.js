const { gql } = require('apollo-server');

module.exports = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    books: [Book]!
  }

  type Product {
    id: ID!
    title: String!
    price: Float!
    image: String
  }

  type Stock {
    product: Product!
    amount: Int!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    product(id: Int): Product
    products: [Product]
    stock(id: Int): Stock
    
    books: [Book]
    book(id: Int): Book

    authors: [Author]
    author(id: Int): Author
  }

  type Mutation {
    addBook(title: String, author: Int!): Book
  }
`;
