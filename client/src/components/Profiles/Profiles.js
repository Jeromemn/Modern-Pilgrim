import React from 'react';

const Profiles = ({ user }) => {
    if (!user.length) {
    return <h3>No Profiles Yet</h3>;
    }

    return (
    <h3>Users</h3>
    );
};

export default Profiles;