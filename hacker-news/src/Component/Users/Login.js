import React, { useState } from "react";
import {Link} from 'react-router-dom';
import authWithAuth from '../utils/axiosWithAuth'

const initialState = {
  username: "",
  password: "", 
  
};

const LogIn = (props) => {
  const [creds, setCreds] = useState(initialState);

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    event.preventDefault();
    authWithAuth()
      .post(`/auth/login`, creds)
      .then(res => {
        console.log("I am here", res);
        props.history.push("/home");
        
        
      });
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="maindiv">
      <div className="firstdiv"></div>
      <div className="inputfield">
        <div className="seconddiv">
        <div>
          <div>
          <lable>Username</lable>
          </div>
          <input className="inputform " 
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
          <div>
        <lable>Password</lable>
        </div>
          <input className="inputform " 
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={creds.password}
            maxLength="24"
            minLength="4"
            required
          />
          <div>
          <button  className ="button1" type="submit">Log In</button>
          <Link to='/SignUp'><button  className ="button1" type="submit">Sign Up</button></Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    </form>
  );
};

export default LogIn;
