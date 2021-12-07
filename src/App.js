import './styles/App.css';
import React, { useState } from 'react';
import axios from 'axios'; //http requests by promises
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './components/Register';
import CryptoCardList from './components/CryptoCardList';
import TransactionDetails from './components/TransactionDetails';
import Login from './components/Login'
import Users from './components/Users';
import TransactionList from './components/TransactionList';
import NavbarResponsive from './components/NavbarResponsive';
import NotFound from './components/NotFound';
import TransactionAction from './components/TransactionAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './i18n';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' }
};

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
    <div className="main-page">
      <div className="content">
        <NavbarResponsive/>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
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
            <Route path="/transaction/all" component={TransactionList}/>
            <Route exact path="/TransactionDetails" component={TransactionDetails}/>
            <Route exact path="/transactionRequest" component={TransactionAction}/>
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
