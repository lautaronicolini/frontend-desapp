import React, { useState } from 'react';
import axios from 'axios'; //http requests by promises
import '../styles/Register.css'
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const baseURL = 'http://localhost:8080/api/register'

function Register () {

     
    const [name,setName]= useState('');
    const [lastName,setLastName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [address,setAddress]= useState('');
    const [CVU,setCVU]= useState('');
    const [walletAddress,setWA]= useState('');
    

    

    const handleChange =(ev) => {
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
        CVU: CVU,
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
    <div className="register">

        <div className="register-body">
            <div className= "form-block">
                <h1 className= "create-account-title">Create an account</h1>
                <form onSubmit={handleSubmit} className="register-form">
                                               
                    <label className="input_id">
                        <input type="text"
                        className="input-box" 
                        name= "name" 
                        autoComplete="name"
                        placeholder="Name"
                        minLength="10"
                        maxLength="30" 
                        value= {name}
                        onChange= {handleChange}
                        required/>
                    </label>

                    <label className="input_id">
                        <input type="text"
                        className="input-box" 
                        name= "lastName" 
                        autoComplete="lastName"
                        placeholder="Last Name"
                        minLength="10"
                        maxLength="30" 
                        value= {lastName}
                        onChange= {handleChange}
                        required/>
                    </label>

                    <label className="input_id">
                        <input type="email"
                        className="input-box"  
                        name= "email" 
                        autoComplete="email"
                        placeholder="Email"
                        value= {email}
                        onChange= {handleChange}
                        required/>
                    </label>

                    <label className="input_id">
                        <input type="address"
                        className="input-box" 
                        name= "address" 
                        autoComplete="address"   
                        minLength="0"
                        maxLength="30" 
                        placeholder="Address"
                        value= {address}
                        onChange= {handleChange}
                        required/>
                    </label>

                    <label className="input_id">
                        <input type="CVU"                                 className="input-box" 
                        name= "CVU" 
                        autoComplete="CVU"   
                        minLength="22" 
                        maxLength="22" 
                        placeholder="CVU (22 digits)"
                        value= {CVU}
                        onChange= {handleChange}
                        required/>
                    </label>

                    <label className="input_id">
                        <input type="walletAddress"                                className="input-box"  
                        name= "walletAddress" 
                        autoComplete="walletAddress"  
                        minLength="8"  
                        maxLength="8" 
                        placeholder="Crypto wallet address"
                        value= {walletAddress}
                        onChange= {handleChange}
                        required/>
                    </label>

                                        
                    <label className="input_id">
                        <input type="password"                                className="input-box"  
                        name= "password"  
                        autoComplete="password" 
                        placeholder="Your new password"
                        value= {password}
                        onChange= {handleChange}
                        required/>
                    </label>

                    <div>
                        <button type="submit" className="btn btn-danger" autoComplete="off">Register</button>
                    </div> 
                </form>


        
            </div>
        </div>
        <ToastContainer
            position="top-right"
            hideProgressBar={true}
             />

    </div> );

}

    export default Register;