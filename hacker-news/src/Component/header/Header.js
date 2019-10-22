import React from  'react';
import {Link} from 'react-router-dom';
import "./Header.css";

const Header = ( ) => {
    return(
        <div className="header">
            <h1>Hacker News</h1>
        <Link to='/LogIn'>LogIn</Link>
        <Link to='/SignUp'>SignUp</Link>
        </div>
    )
}

export default Header;