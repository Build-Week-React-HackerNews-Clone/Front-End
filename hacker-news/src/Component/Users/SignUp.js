import React, { useState } from "react";

const initialState = {
  username: "",
  password: ""
};

const SignUp = () => {
  const [users, setUsers] = useState(initialState);

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    event.preventDefault();
    console.log(users);
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
        />

        <input
          type="Email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={users.username}
        />

        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={users.password}
        />
        <button>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUp;
