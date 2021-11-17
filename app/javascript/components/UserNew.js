import React from "react";

const UserNew = (props) => {
  return (
    <div>
      <h1>New User</h1>
      <form action="/users" method="post">
        <p>Full Name</p>
        <input name="user[full_name]" />
        <p>Age</p>
        <input name="user[age]" />
        <p>Gender</p>
        <input name="user[gender]" />

        <button type="Submit">Add</button>
      </form>
    </div>
  );
};

export default UserNew;