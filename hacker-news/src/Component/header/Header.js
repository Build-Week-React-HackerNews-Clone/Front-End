import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(

        <div>
          <Link to='/Login'>LogIn</Link>
          <Link to='/SignUp'>SignUp</Link>
        </div>
    )
}
export default Header;