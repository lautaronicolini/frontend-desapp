import React, { useState } from 'react';
import axios from 'axios'; //http requests by promises
import '../styles/Register.css'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import  Navbar  from './Navbar';


const baseURL = 'http://localhost:8080/api/register'

function Register() {

     
    const [name,setName]= useState('');
    const [lastName,setLastName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [address,setAddress]= useState('');
    const [CVU,setCVU]= useState('');
    const [walletAddress,setWA]= useState('');
    

    

    const handleChange =(ev) => {
        console.log("Change event - ",ev.target.name)
    if (ev.target.name === "name") setName(ev.target.value);
    if (ev.target.name === "lastName") setLastName(ev.target.value);
    if (ev.target.name === "email") setEmail(ev.target.value);
    if (ev.target.name === "password") setPassword(ev.target.value);
    if (ev.target.name === "address") setAddress(ev.target.value);
    if (ev.target.name === "CVU") setCVU(ev.target.value);
    if (ev.target.name === "walletAddress") setWA(ev.target.value);
    }
    
    const handleSubmit = (ev) =>{ 
        console.log("handling submit")
    axios.post(
        baseURL,
        {
        name: name, 
        lastName: lastName, 
        email: email, 
        password: password,
        address: address, 
        cvu: CVU,
        walletAddress: walletAddress
        }    
    )
    .then(success=>{
        toast.success("Successfully registered !")}
    )
    .catch ( error => {
    console.log(error)
        toast.error("User registration failed")
    })

    ev.preventDefault();
    }

    return(
    <div>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"></link>

            <Navbar/>

        <div className="container">

        <div class="card bg-light">
        <article class="card-body mx-auto">
            <h4 class="card-title mt-3 text-center">Create Account</h4>
            <p class="text-center">Get started with your free account</p>

            <form onSubmit={handleSubmit} className="register-form">
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                </div>
                <input
                className="input-box" 
                name= "name" 
                autoComplete="name" 
                placeholder="Name" 
                type="text"
                minLength="1"
                maxLength="30" 
                value = {name}
                onChange= {handleChange}
                required/>
                
            </div> 
            
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                </div>
                <input 
                className="input-box" 
                name= "lastName" 
                autoComplete="lastName" 
                placeholder="Last Name"
                type="text"
                minLength="1"
                maxLength="30" 
                value = {lastName}
                onChange= {handleChange}
                required/>
            </div>  
            
                <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                </div>
                <input 
                className="input-box" 
                name= "email" 
                autoComplete="email" 
                placeholder="Emai"
                type="email"
                value = {email}
                onChange= {handleChange}
                required/>
            </div>
        
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
                </div>
                    <input 
                    className="input-box" 
                    name= "address" 
                    autoComplete="address" 
                    placeholder="Address"
                    type="text"
                    minLength="0"
                    maxLength="30" 
                    placeholder="Address"
                    value = {address}
                    onChange= {handleChange}
                    required/>
                
            </div>

            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input
                className="input-box" 
                name= "password" 
                autoComplete="password" 
                placeholder="Create password"
                type="password"
                value = {password}
                onChange= {handleChange}
                required/>
            </div>
            
                <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> </span>
                </div>
                <input 
                className="input-box" 
                name= "CVU" 
                autoComplete="CVU" 
                type="text"
                minLength="22" 
                maxLength="22" 
                placeholder="CVU (22 digits)"
                value = {CVU}
                onChange= {handleChange}
                required/>
            </div>        
            
                <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> </span>
                </div>
                <input 
                className="input-box" 
                name= "walletAddress" 
                autoComplete="walletAddress" 
                placeholder="Wallet Address"
                type="text"
                minLength="8"  
                maxLength="8" 
                placeholder="Crypto wallet address"
                value = {walletAddress}
                onChange= {handleChange}
                required/>
            </div>
            



            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block"> Create Account </button>
            </div> 

            <p class="text-center">Already have an account? <a href="/login">Log In</a> </p>                                                                 
        </form>
        </article>

        <br/>
        <article class="bg-secondary mb-3">  
        <div class="card-body text-center">
            <h4 class="text-white mt-3">CryptoP2P</h4>
        <p class="h5 text-white">Start operating now  <br/> FAQ</p>   <br/>

        </div>
        <br/><br/>
        </article>
        </div> 
                    
        <ToastContainer
                    position="top-right"
                    hideProgressBar={true}
                    />
        </div>


    </div>
    
    );

}

    export default Register;