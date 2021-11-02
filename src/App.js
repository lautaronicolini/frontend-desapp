import './styles/App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import CryptoCardList from './components/CryptoCardList';
import TransactionDetails from './components/TransactionDetails';
import Login from './components/Login'
import Users from './components/Users';

function App() {
  return (
    <div className="main-page">
      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/crypto" component={CryptoCardList}/>
            <Route path="/transaction" component={TransactionDetails}/>
            <Route path="/login" component={Login}/>
            <Route path="/users" component={Users}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
