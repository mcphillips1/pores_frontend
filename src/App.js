import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration/Registration'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Registration} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
