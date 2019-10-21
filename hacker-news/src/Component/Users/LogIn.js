import React, { setUser } from "react";

const initialState = {
  username: "",
  password: ""
};

const Login = () => {
  const [creds, setCreds] = setUser(initialState);

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
          placeholder="username"
          onChange={handleChange}
          value={creds.username}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onchanged={handleChange}
          value={creds.password}
        />
        <button type="submit">LogIn</button>
      </div>
    </form>
  );
};

export default Login;
