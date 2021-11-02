import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



function Navbar ()  {
     
      return(  
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Crypto P2P</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/cryptos">Cryptos </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/users">Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">Register</a>
            </li>

          </ul>
        </div>
      </nav>
      );
    }
    

    export default Navbar;