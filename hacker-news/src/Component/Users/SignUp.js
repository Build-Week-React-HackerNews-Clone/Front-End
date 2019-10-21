import React, { useState } from "react";
import { link } from "";

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
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={users.username || ""}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={users.email || ""}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={users.password || ""}
          required
        />
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};

export default SignUp;
