const { gql } = require("apollo-server-express");

// need to make a query me

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bio: String
    trip: [Trip]
  }
  type Trip {
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
  # i added
  input TripsSearchFilter {
    # _id: ID
    location: String
    price: Float
    # offet
    # limit
  }
  #  ask about this
  # type TripInput {
  #   filter: TripsSearchFilter
  # }
  # end added
  type Query {
    getTrips: [Trip]
    getTripById(_id: ID!): Trip
    getComments: [Comment]
    getUser(_id: ID): User
    searchTrip(value: String): [Trip]
    getPrices(search: Float): Trip
    getRating(search: Int): Trip
    trip(input: TripsSearchFilter): [Trip]
  }
  type Mutation {
    addUser(username: String!, email: String!, bio: String): User
    addTrip(
      user: ID
      summary: String!
      location: String!
      price: Float!
      rating: Int!
    ): Trip
    addComment(commentUser: String, commentText: String!): Comment
    updateUser(username: String, email: String, bio: String): User
    updateTrip(
      user: ID
      summary: String!
      location: String!
      price: Float!
      rating: Int!
    ): Trip
    deleteTrip(_id: ID): Trip
  }
  # type Mutation {
  #   addUser(
  #     username: String!
  #     email: String!
  #     bio: String!
  #   ): Auth
  #   addTrip(
  #     user: User!
  #     summary: String!
  #     location: String!
  #     price: Float!
  #     rating: Int!
  #   ): Trip
  #   addComment(Trip: Trip!, textField: String!): Comment
  #   updateUser(username: String, email: String, bio: String): User
  #   updateTrip(
  #     user: User!
  #     summary: String!
  #     location: String!
  #     price: Float!
  #     rating: Int!
  #   ): Trip
  #   deleteTrip(_id: ID): Trip
  # }
`;

module.exports = typeDefs;
