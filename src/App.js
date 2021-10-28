import './styles/App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import CryptoCardList from './components/CryptoCardList';
import Login from './components/Login'


function App() {
  return (
    <div className="main-page">
      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/crypto" component={CryptoCardList}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
