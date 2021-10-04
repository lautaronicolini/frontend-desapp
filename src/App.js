import './styles/App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './components/Register';


function App() {
  return (
    <div className="main-page">
      <div className="content">
        <BrowserRouter>
          <Switch>
          <Route path="/" component={Register}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
