import React from "react";

const Users = (props) => {
    const renderUsers = () => {
        return props.users.map((user) => {
            return (
                <div>
                    <h1>{user.full_name}</h1>
                    <p>Age:{user.age}, Gender:{user.gender}</p>
                    <a href={`/users/${user.id}`}>View this User</a>
                </div>
            );
        });
    };
    return (
        <div>
            <h3>All Users Shown</h3>
            <a href="/">Back to Home</a>
            <br></br>
            <a href="/users/new">Make a New User</a>
            <p>{renderUsers()}</p>
        </div>
    );
};

export default Users;