import React from "react";

const User = (props) => {
    return (
        <div>
            <h1>{props.user.full_name}</h1>
            <h2>{props.user.age}</h2>
            <h2>{props.user.gender}</h2>
            <a href={`/users/${props.user.id}/edit`}>Edit this User</a>
            <a href={`/users/${props.user.id}`} data-method="delete">Delete this User</a>
        </div>
    );
};

export default User;