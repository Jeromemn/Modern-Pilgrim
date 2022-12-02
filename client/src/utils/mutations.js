import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
login(username: $username, $password: $$password) {
    token
    user {
        _id
        username
    }
}
}`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($tripText: String!) {
    addTrip(tripText: $tripText) {
      _id
      tripText
      tripLocation
      tripPrice
      tripRating
      tripAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($tripId: ID!, $commentText: String!) {
    addComment(tripId: $tripId, commentText: $commentText) {
      _id
      tripText
      tripLocation
      tripPrice
      tripRating
      tripAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

// export const UPLOAD_FILE = gql`
// mutation upload($file: Upload!) {
// upload(file: $file) {
//   filename
// }
// }
// `;