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
    posts: [Post]
    comments: [Comment]
    user(_id: ID): User
    searchPost(value: String): [Post]
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
    # updateUser(
    #   username: String
    #   email: String
    #   bio: String
    # ): User
  }
`;

module.exports = typeDefs;
