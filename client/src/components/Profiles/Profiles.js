import React from 'react';

const Profiles = ({ user }) => {
    if (!user.length) {
    return <h3>No Profiles Yet</h3>;
    }

    return (
<div>
    <h3 className="text-primary">User</h3>
    <div className="flex-row justify-space-between my-4">
        {user &&
        user.map((user) => (
            <div key={user._id} className="col-12 col-xl-6">
            <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                {user.name} <br />
                </h4>
            </div>
            </div>
        ))}
    </div>
    </div>
);
};
export default Profiles;