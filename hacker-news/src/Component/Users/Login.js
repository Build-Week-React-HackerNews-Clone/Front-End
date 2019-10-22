import React, { useState } from "react";
import {Link} from 'react-router-dom'

const initialState = {
  username: "",
  password: "", 
  
};

const LogIn = () => {
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
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={creds.username}
            pattern="^[a-zA-Z0-9_.-]*$"
            required
          />
          <div>{setCreds.usernameError}</div>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={creds.password}
            maxlength="24"
            minlength="4"
            required
          />
          <button type="submit">Log In</button>
          <Link to='/SignUp'><button type="submit">Sign Up</button></Link>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
