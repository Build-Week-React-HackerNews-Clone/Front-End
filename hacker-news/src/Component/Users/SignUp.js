import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Users.css";

const initialState = {
  username: "",
  email: "",
  password: ""
};

const SignUp = props => {
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
        props.history.push("/LogIn");
      });
  };

  return (
    <div className="formcontainer">
      <form onSubmit={handleSubmit}>
        <div className="maindiv">
          <div className="seconddiv">
            <h3>Create a New Account</h3>
            <div>
              <label>Username</label>
            </div>
            <div>
              <input
                className="inputform "
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={users.username}
                pattern="^[a-zA-Z0-9_.-]*$"
                required
              />
            </div>
            
           <div className="password">
            <label >Email</label>
            </div>
            <div>
              <input
                className="inputform "
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={users.email}
                required
              />
            </div>

            <div className="password">
              <label>Password</label>
            </div>
            <div>
              <input
                className="inputform"
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
            <button className="button2" type="submit">
              Sign Up
            </button>
            <Link to="/LogIn">
              {" "}
              <a>I am already Member</a>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
