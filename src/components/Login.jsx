

import React, { useState } from 'react';
import axios from 'axios'; //http requests by promises
import '../styles/Login.css'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const baseURL = 'http://localhost:8080/api/login' //endpoint of backend API

function Login () {

return(
<div className="login-body">
    <div className='d-flex'>
        <div className='login-card'/>
        <div className='form section container center d-flex flex-column align-items-center login' style={{ width: '55%', maxHeight: '100vh' }}>
            <h1>Login to your account</h1>
            <input type='text' name='username' placeholder='Email'/>
            <input type='password' name='password' placeholder='Password'/>
                <p> Don't have an account?</p>  <Link to="/register">Sign-up here</Link>
            <button>Log In</button>
            
        </div>
    </div>
</div>
)

}

export default Login;