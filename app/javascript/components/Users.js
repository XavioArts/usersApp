import React from "react";

const Users = (props) => {
    const renderUsers = () => {
        return props.users.map((user)=>{
            return (
                <div>
                    <h1>{user.full_name}</h1>
                    <p>Age:{user.age}, Gender:{user.gender}</p>
                </div>
            );
        });
    };
    return (
        <div>
            <h3>All Users Shown</h3>
            {/* here is where we would put a link to create new user */}
            <p>{renderUsers()}</p>
        </div>
    );
};

export default Users;