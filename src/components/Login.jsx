

import React, { Component, useState } from 'react';
import axios from 'axios'; //http requests by promises
import '../styles/Login.css'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import 'react-bootstrap'
import { Link } from 'react-router-dom';
import  Navbar  from './Navbar';
import { useHistory } from 'react-router-dom';

const baseURL = 'http://localhost:8080/api/authenticate' //endpoint of backend API

class Login extends Component {

    constructor(){
        super()
        this.state = {username: "", password: ""}
        this.loginUser = this.loginUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    loginUser(){
        axios.post(baseURL, {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            const cryptos = res.data;
            this.setState({ cryptos });
        })
    }

    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return(
        <div className="login-body">
            <Navbar/>
            <div className='d-flex'>
                <div className='login-card'/>
                <div className='form section container center d-flex flex-column align-items-center login' style={{ width: '55%', maxHeight: '100vh' }}>
                    <h1>Login to your account</h1>
                    <input onChange={this.handleChange} className="login-input" type='text' name='username' placeholder='Email'/>
                    <input onChange={this.handleChange} className="login-input" type='password' name='password' placeholder='Password'/>
                    <p> Don't have an account?</p>  <Link to="/register">Sign-up here</Link>
                    <button onClick={this.loginUser}>Log In</button>
                </div>
            </div>
            <ToastContainer
                    position="top-right"
                    hideProgressBar={true}
                    />
        </div>
        )
    }
}

export default Login