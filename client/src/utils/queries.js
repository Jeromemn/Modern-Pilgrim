import { gql } from "@apollo/client";

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
    _id
    username
    email
    trips {
        _id
        tripText
        tripLocation
        tripPrice
        tripRating
        createdAt
    }
    }
}
`;

export const QUERY_TRIPS = gql`
query getTrips {
    trips {
    _id
    tripText
    tripLocation
    tripPrice
    tripRating
    tripAuthor
    createdAt
    }
}
`;

export const QUERY_SINGLE_TRIP = gql`
query getSingleTrip($tripId: ID!) {
    trip(tripId: $tripId) {
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
}`;

export const QUERY_ME = gql`
query me {
    me {
        _id
        username
        email
        bio
        trips {
            _id
            tripText
            tripLocation
            tripPrice
            tripRating
            tripAuthor
            createdAt
        }
    }
}`;

export const TRIP_SEARCH_QUERY = gql`
query tripSearchQuery($filter: String!)  {
    feed(filter: $filter) {
    _id
    trips {
        _id
        tripText
        tripLocation
        tripPrice
        tripRating
        createdAt
        tripAuthor {
        id
        username
        }
        comments {
            _id
            commentText
            createdAt
        }
    }
    }
}
`;