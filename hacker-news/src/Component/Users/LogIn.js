import React, { useState } from "react";

const initialState = {
  username: "",
  password: ""
};

const Login = () => {
  const [creds, setCreds] = useState(initialState);

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    event.preventDefault();
    console.log(creds);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={creds.username}
        />

        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={creds.password}
        />
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};

export default Login;
