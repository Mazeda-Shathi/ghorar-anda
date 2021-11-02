import React from 'react';
import initializeAuthentication from '../../../firebase/Firebase.init';
import UseAuth from '../hook/UseAuth';
initializeAuthentication()
const Login = () => {
    const { user, GoogleSignIn } = UseAuth();
    return (
        <div id="login">
            <h2>Please Sign In</h2>
            <button onClick={GoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;