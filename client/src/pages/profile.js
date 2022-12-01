//current user and other users
import React from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_SINGLE_PROFILE } from "../utils/queries";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
const { profileId } = useParams();
const { username, isAuthenticated, isLoading } = useAuth0();
const { data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
        variables: { profileId: profileId },
    }
);

const profile = data?.me || data?.profile || {};

if (isLoading) {
    return <div>Loading ...</div>;
}

if (!profile?.name) {
    return (
    <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
    </h4>
    );
}

if (isAuthenticated) {
return (
    (
    <div>
        <img src={username.picture} alt={username.name} />
        <h2>{username.name}</h2>
        <p>{username.email}</p>
    </div>
    )
    );
}
};

export default Profile;