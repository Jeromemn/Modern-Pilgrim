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
    commentText: String
    commentUser: User
  }
  type Query {
    getPosts: [Post]
    getPost(_id: ID): Post
    getComments: [Comment]
    getUser(_id: ID): User
    searchPost(value: String): [Post]
    getPrices(search: Float): Post.price
    getRating(search: Int): Post.rating
  }
  type Mutation {
    addUser(
      username: String!
      email: String!
      bio: String!
    ): Auth
    addPost(
      user: User!
      summary: String!
      location: String!
      price: Float!
      rating: Int!
    ): Post
    addComment(
      post: Post!
      textField: String!
    ): Comment
    updateUser(
      username: String
      email: String
      bio: String
    ): User
    updatePost(
      user: User!
      summary: String!
      location: String!
      price: Float!
      rating: Int!
    ): Post
    deletePost(_id: ID): Post
  }
`;

module.exports = typeDefs;
