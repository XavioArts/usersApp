import React from "react"

const UserNew = (props) => {
  return (
    <div>
      <h1>New User</h1>
      <form action="/user" method="post">
        <p>Full Name</p>
        <input name="user[Full Name]" />
        <p>Age</p>
        <input name="user[Age]" />
        <p>Gender</p>
        <input name="user[Gender]" />

        <button type="Submit">Add</button>
      </form>
    </div>
  );
};

export default UserNew;