import React, { useState } from "react";

const initialState = {
  username: "",
  email: "",
  password: ""
};

const SignUp = () => {
  const [users, setUsers] = useState(initialState);

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a New Account</h1>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={users.username}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={users.email}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={users.password}
          maxlength="24"
          minlength="4"
          required
        />
        <button type="submit">Sign Up</button>
        <a>I am already Member</a>
      </div>
    </form>
  );
};

export default SignUp;
