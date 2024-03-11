import React from "react";
import "./CreateUser.css";

const CreateUser = ({
  firstname,
  lastname,
  getFirstName,
  getLastName,
  createUser,
}) => {
  return (
    <div className="create-user">
      <h1>WELCOME!</h1>
      <h1>CREATE USER</h1>
      <form>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={firstname}
          onChange={getFirstName}
          required
        />

        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={getLastName}
          required
        />

        <button type="submit" onClick={createUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
