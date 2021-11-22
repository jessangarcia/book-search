const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
      bookId: String
      authors: [String]
      title: String
      description: String
      image: String
      link: String
  }

  type Query {
      me: User
  }

  type Auth {
      token: ID!
      user: User
  }

  type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(book: BookInput!): User
      removeBook(bookId: ID!): User
  }

  input BookInput {
      bookId: String
      image: String
      link: String
      authors: [String]
      description: String
  }
`;


module.exports = typeDefs;