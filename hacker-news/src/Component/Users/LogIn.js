import React, { useState } from "react";


const initialState = {
  username: "",
  password: ""
};

const Login = () => {
  const [creds, setCreds] = useState(initialState);

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
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
          value={creds.username || ''}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={creds.password || ''}
          required
        />
        <button type="submit">Log In</button>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default Login;
