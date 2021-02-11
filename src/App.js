import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/Shop';
import './App.css';


function App() {
  return (
    <div>
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </div>
    </div>
  );
}

export default App;
