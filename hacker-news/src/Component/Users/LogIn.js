import React, {setUser} from 'react';

const initialState = {
    username: "",
    password: ""
  };

const LogIn = () => {
 const [creds, setcreds] = setUser( initialState) 

 

    return(
        <div>
            <input
            type="text"
            name="username"
            placeholder="username"
            onChange = {handleChange}
            value={creds.username}/>
            <input
            type="text"
            name="password"
            placeholder="password"
            onchanged ={handleChange}
            value={creds.password}/>
            <button>LogIn</button>
        </div>
    )
}

export default LogIn;