import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar ()  {
     
      return(  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Crypto P2P</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/crypto">Cryptos </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/transaction/all">Active Transactions</a>
            </li>

          </ul>
        </div>
      </nav>
      );
    }
    

    export default Navbar;