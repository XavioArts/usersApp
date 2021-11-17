import React from "react";

const User = (props) => {
    return (
        <div>
            <h1>{props.user.full_name}</h1>
            <h2>{props.user.age}</h2>
            <h2>{props.user.gender}</h2>
        </div>
    );
};

export default User;