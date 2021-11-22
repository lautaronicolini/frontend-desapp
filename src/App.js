import './styles/App.css';
import React, { useState } from 'react';
import axios from 'axios'; //http requests by promises
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import CryptoCardList from './components/CryptoCardList';
import BuyTransactionDetails from './components/BuyTransactionDetails';
import SellTransactionDetails from './components/SellTransactionDetails';
import Login from './components/Login'
import Users from './components/Users';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


function App() {
  const [loggedIn, setLogState] = useState(false);
  const [token, setToken] = useState('');

  const handleLogin = (data) => {
    setToken(data);
    localStorage.setItem("SavedToken", token);
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    setLogState(true);
    console.log('token en app: ', token, ' ',loggedIn)
  }

  return (
    <div className="main-page">
      <div className="content">
        <Navbar/>
        <BrowserRouter>
          <Switch>
         
          <Route exact path="/" loggedIn= {loggedIn} handleLogin={handleLogin} component={Login}/>
           <Route path='/login'>
            <Login handleLogin={handleLogin} loggedIn={loggedIn} />
            </Route>
            <Route exact path="/register" loggedIn= {loggedIn} handleLogin={handleLogin} component={Register}/>
            <Route exact path="/crypto"  loggedIn= {loggedIn} token={token} component={CryptoCardList}/>
            <Route exact path="/buyTransaction" loggedIn= {loggedIn} token={token} component={BuyTransactionDetails}/>
            <Route exact path="/sellTransaction" loggedIn= {loggedIn} token={token} component={SellTransactionDetails}/>
            <Route exact path="/users"  loggedIn= {loggedIn} token={token} component={Users}/>
            <Route  path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
