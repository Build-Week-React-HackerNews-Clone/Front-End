import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Users.css";

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
    axios
      .post(`https://hacked-news-app.herokuapp.com/api/auth/register`, users)
      .then(res => {
        console.log("I am here", res);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
     
      <div className="maindiv">
        <div className="firstdiv">hello</div>
        <div className="seconddiv">
        <h3>Create a New Account</h3>
          <div>
            <lable>Username</lable>
          </div>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={users.username}
              pattern="^[a-zA-Z0-9_.-]*$"
              required
            />
          </div>

          <div>Email</div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={users.email}
              required
            />
          </div>

          <div>Password</div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={users.password}
              maxLength="24"
              minLength="4"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <Link to="/LogIn"> I am already Member</Link>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
