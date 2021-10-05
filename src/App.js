import './styles/App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import CryptoCardList from './components/CryptoCardList';


function App() {
  return (
    <div className="main-page">
      <div className="content">
        <BrowserRouter>
          <Switch>
          <Route path="/" component={CryptoCardList}/>
            <Route path="/register" component={Register}/>
            <Route path="/crypto" component={CryptoCardList}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
