import React from "react";

const UserEdit = (props) => {
    return (
        <div>
            <form action={`/users/${props.user.id}`} method="post">
                <input type="hidden" name="_method" value="put" />
                <p>Full Name</p>
                <input name="user[full_name]" />
                <p>Age</p>
                <input name="user[age]" />
                <p>Gender</p>
                <input name="user[gender]" />
                <button type="submit">Make Changes</button>
            </form>
        </div>
    );
};

export default UserEdit;