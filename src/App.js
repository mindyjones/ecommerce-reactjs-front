import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import './App.css';

const HatsPage = (props) => {
  return(
  <div>
    <h1>Hats PAGE</h1>
  </div>
  );
};


function App() {
  return (
    <div>
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </div>
    </div>
  );
}

export default App;
