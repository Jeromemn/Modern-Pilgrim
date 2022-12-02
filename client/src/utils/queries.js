import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      trips {
        _id
        # tripText
        user
        summary
        location
        price
        rating
        comments
      }
    }
  }
`;

export const QUERY_TRIPS = gql`
  query getTrips {
    trip {
      _id
      # tripText
      user
      summary
      location
      price
      rating
      comments
    }
  }
`;

export const QUERY_SINGLE_TRIP = gql`
  query getSingleTrip($tripId: ID!) {
    getSingletrip(tripId: $tripId) {
      _id
      # tripText
      user
      summary
      location
      price
      rating

      comments {
        _id
        commentText
        commentUser
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me($username: String) {
    me(username: $username) {
      _id
      username
      email
      bio
      trip {
        _id
        # tripText
        summary
        location
        price
        rating

      }
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileID: ID!) {
    profile(profileId: $profileID) {
      _id
      username
      trip {
        _id
        # tripText
        user
        summary
        location
        price
        rating
        comments
      }
    }
  }
`;

export const TRIP_SEARCH_QUERY = gql`
  query tripSearch($filter: String!) {
    feed(filter: $filter) {
      _id
      trips {
        _id
        # tripText
        user
        summary
        location
        price
        rating
        comments
        user {
          _id
          username
        }
        comments {
          _id
          commentText
          commentUser
        }
      }
    }
  }
`;

export const FIND_TRIP = gql`
  query trip($tripsInput: TripsSearchFilter) {
    trip(input: $tripsInput) {
      _id
      # tripText

      summary
      location
      price
      rating
      user {
        _id
        username
      }
      comments {
        _id
        commentText
      }
    }
  }
`;
