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

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
    <div className="main-page">
      <div className="content">
        <Navbar/>
        <BrowserRouter>
          <Switch>
          <Route exact path="/" render ={ props => (
            <Login {...this.props}  />
            )}/>
          <Route exact path="/login"  render ={ props => (
            <Login {...this.props}  />
            )}/>
            <Route exact path="/register"  component={Register}/>
            <Route exact path="/crypto"  component={CryptoCardList}/>
            <Route exact path="/buyTransaction" component={BuyTransactionDetails}/>
            <Route exact path="/sellTransaction" component={SellTransactionDetails}/>
            <Route exact path="/users" component={Users}/>
            <Route  path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}
}
export default App;
