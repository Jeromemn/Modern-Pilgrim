//current user and other users
import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_SINGLE_PROFILE } from "../utils/queries";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "../components/Buttons/LoginBtn";
import SignupBtn from "../components/Buttons/SignupBtn";

const Profile = () => {
const { profile } = useParams();
const { username, user: authUser, isAuthenticated, isLoading } = useAuth0();
console.log(authUser);
const data = useQuery(
    profile ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
        variables: { username: profile || authUser?.nickname },
    }
);
console.log(data)
const user = data?.user || data?.authUser || {};
console.log(user)

if (isAuthenticated && profile === username) {
    return (
        (
        <div>
            {/* <img src={username.picture} alt={username.name} />
            <h2>{username.name}</h2>
            <p>{username.email}</p> */}
            <p>User {user.username}</p> 
        </div>
        )
        );
    }

if (isLoading) {
    return <div>Loading ...</div>;
}

if (!user?.username) {
    return (
    <h4>
        You need to be logged in to see your profile page. Use the navigation
        links below to sign up or log in!
        <br></br>
    <LoginBtn/> <SignupBtn/>
    </h4>
    );
}

};

export default Profile;

