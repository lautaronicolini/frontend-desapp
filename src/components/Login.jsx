

import React, { useState } from 'react';
import axios from 'axios'; //http requests by promises
import '../styles/Login.css'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import  Navbar  from './Navbar';
import { useHistory } from 'react-router-dom';



const baseURL = 'http://localhost:8080/authenticate' //endpoint of backend API

function Login (props) {
    const history = useHistory();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

 const handleChange =(ev) => {
        console.log("Change event - ",ev.target.name, ev.target.value)
        console.log("Props - ",props)
    if (ev.target.name === "email") setEmail(ev.target.value);
    if (ev.target.name === "password") setPassword(ev.target.value);
    }
    
    const handleSubmit = (ev) =>{ 
        console.log("handling submit")
        console.log(email)
    axios.post(
        baseURL,
        {
        username: email, 
        password: password
        },
        { headers: {'Content-Type': 'application/json'}}
    )
    .then(response=>{
        console.log(props,"props")
        props.handleLogin( response.data.access);

        history.push('/users')

        }
    )
    .catch ( error => {
    console.log(error)
        toast.error("Incorrect credentials")
    })

    ev.preventDefault();
    }


return(
<div className="login-body">
    <form onSubmit={handleSubmit} className="login-form">

        <div className='d-flex'>

            <div className='login-card'/>

            <div className='form section container center d-flex flex-column align-items-center login' style={{ width: '55%', maxHeight: '100vh' }}>
                <h1>Login to your account</h1>
                    <input className="login-input" type='text' name='email' placeholder='Email' onChange={handleChange}/>
                    <input className="login-input" type='password' name='password' placeholder='Password' onChange={handleChange}/>
                    <p> Don't have an account?</p>  <Link to="/register">Sign-up here</Link>
                <button>Log In</button>
            </div>
        </div>
        
    </form>
    <ToastContainer
                    position="top-right"
                    hideProgressBar={true}
                    />
</div>
)

}

export default Login;