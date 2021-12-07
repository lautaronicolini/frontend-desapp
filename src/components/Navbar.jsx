import React from 'react';
import '../styles/Navbar.css'
import { useTranslation, Trans } from 'react-i18next';

function Navbar ()  {
      const { t, i18n } = useTranslation();
      return(  
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Crypto P2P</a>
        <span class="navbar-text">
          {localStorage.getItem('user')} |
          </span>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="/login"><Trans i18nKey="login.loginText">Login</Trans></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/users"><Trans i18nKey="navbar.users">Users</Trans></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/transaction/all"><Trans i18nKey="navbar.transactions">Active Transactions</Trans></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/crypto"><Trans i18nKey="navbar.createTransactions">Create Transaction </Trans></a>
            </li>
          </ul>
          <div/>
        </div>
      </nav>
      );
    }
    

    export default Navbar;