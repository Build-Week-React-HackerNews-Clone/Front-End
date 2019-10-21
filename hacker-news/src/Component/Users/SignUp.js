import React, {useState} from 'react';

const SignUp = () => {
    const [users, setUsers] = useState({username:"", password:""})
   

    return(
        <form>
        <div>
           <input
           type="text"
           name="username"
           placeholder = "Username"
           onChange={handleChange}
           value={users.username}
           />
           <input
           type="text"
           name="password"
           placeholder="password"
           onChange={handleChange}
           value={users.password}
           />
           <button>Sign Up</button>
        </div>
        </form>
    )
}

export default SignUp;