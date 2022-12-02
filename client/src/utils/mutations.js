import { gql } from "@apollo/client";

// export const LOGIN_USER = gql`
// mutation login($username: String!, $password: String!) {
// login(username: $username, $password: $password) {
//     token
//     user {
//         _id
//         username
//     }
// }
// }`;

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

export const ADD_TRIP = gql`
  mutation addTrip(
    $username: String!
    $summary: String!
    $location: String!
    $price: Float!
    # $rating: Int
    $image: String!
  ) {
    addTrip(
      username: $username
      summary: $summary
      location: $location
      price: $price
      # rating: $rating
      image: $image
    ) {
      _id
      location
      summary
      price
      # rating
      # look into user id and adding 
      image
    }
  }
`;

// export const ADD_COMMENT = gql`
//   mutation addComment($tripId: ID!, $commentText: String!) {
//     addComment(tripId: $tripId, commentText: $commentText) {
//       _id
//       tripText
//       tripLocation
//       tripPrice
//       tripRating
//       tripAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
