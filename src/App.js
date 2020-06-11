import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div>
      <h1>Our Today Menu</h1>
      <Dinner dishName='Chicken Biryani' sweetdishName='Gajar ka Halwa'/>
      <hr/>
      <Dinner dishName='Chicken Karahi' sweetdishName='Loki Halwa'/>
      <hr/>
      <Dinner dishName='Chinese Fried Rice' sweetdishName='Custered'/>
    </div>
  );
}

export default App;
