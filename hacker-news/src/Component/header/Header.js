import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerdiv">
        <h1>Hacker News</h1>
      </div>
      <div className='headerdiv2'>
        <Link to="/LogIn"><a>LogIn</a></Link>
        <Link to="/SignUp">SignUp</Link>
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
};

export default Header;
