import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { signInWithGoogle }=useFirebase();
    return (
        <div>
            <h1>please Login</h1>
            <div className='google' >
            <button onClick={signInWithGoogle} >Google login</button>
            </div>
            <form >
                 
                 <input type="email" placeholder='Your Email' />
                 <br/>
                 <input type="password" placeholder='Your Password' />
                 <br/>
                 <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;