import React from 'react';
import logo from './logo.svg';
import './App.css';
import './shop.sass';

function App() {
  return (
    <div className="App">
      <div className="grid">

        <div className="grid-item">
          <div className="grid-item__img">
            <img src="/img/img1.jpg" alt=""/>
          </div>
          <div className="grid-item__title">Cat Tee Black T-Shirt</div>
          <div className="grid-item__price">$<strong>10.90</strong></div>
        </div>

      </div>
    </div>
  );
}

export default App;