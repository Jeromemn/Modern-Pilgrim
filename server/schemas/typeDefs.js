const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bio: String
    posts: [Post]
  }
  type Post {
    _id: ID
    user: User
    summary: String
    location: String
    price: Float
    rating: Int
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentText: String
    commentUser: String
  }
  type Query {
    getPosts: [Post]
    getPost(_id: ID): Post
    getComments: [Comment]
    getUser(_id: ID): User
    searchPost(value: String): [Post]
    getPrices(search: Float): Post
    getRating(search: Int): Post
  }
  type Mutation {
    addUser(username: String!, email: String!, bio: String): User
    addPost(
      user: ID
      summary: String!
      location: String!
      price: Float!
      rating: Int!
    ): Post
    addComment(commentUser: String, commentText: String!): Comment
    updateUser(username: String, email: String, bio: String): User
    updatePost(
      user: ID
      summary: String!
      location: String!
      price: Float!
      rating: Int!
    ): Post
    deletePost(_id: ID): Post
  }
`;

module.exports = typeDefs;
