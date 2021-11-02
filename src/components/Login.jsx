

import React, { useState } from 'react';
import axios from 'axios'; //http requests by promises
import '../styles/Login.css'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import  Navbar  from './Navbar';


const baseURL = 'http://localhost:8080/api/login' //endpoint of backend API

function Login () {

return(
<div className="login-body">
<Navbar/>
    <div className='d-flex'>
        <div className='login-card'/>
        <div className='form section container center d-flex flex-column align-items-center login' style={{ width: '55%', maxHeight: '100vh' }}>
            <h1>Login to your account</h1>
            <input className="login-input" type='text' name='username' placeholder='Email'/>
            <input className="login-input" type='password' name='password' placeholder='Password'/>
                <p> Don't have an account?</p>  <Link to="/register">Sign-up here</Link>
            <button>Log In</button>
            
        </div>
    </div>
</div>
)

}

export default Login;