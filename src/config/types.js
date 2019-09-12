const { gql } = require('apollo-server');

module.exports = gql`
  type Book @cacheControl(maxAge: 100) {
    id: ID!
    title: String!
    author: [Author]!
  }

  type Author @cacheControl(maxAge: 100) {
    id: ID!
    name: String!
    books: [Book]!
  }

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
    products: [Product]
    stock(id: Int): Stock
    
    books: [Book]
    book(id: Int): Book

    authors: [Author]
    author(id: Int): Author
  }

  type Mutation {
    addBook(title: String, author: Int!): Book
    removeBook(id: Int!): Status!
    
    addAuthor(name: String, books: [Int!] = []): Author
    updateAuthor(id: Int!, name: String!, books: [Int!] = []): Author
    removeAuthor(id: Int!): Status!
    
    addProduct(title: String!, price: Float!, image: String): Product
    updateProduct(id: Int!, title: String!, price: Float!, image: String): Product
    removeProduct(id: Int!): Status!
  }
`;
