import React from 'react';
import logo from './logo.svg';
import './App.css';
import './shop.sass';
import Card from './components/card'

function App() {
  return (
    <div className="App">

      <div className="cart">
        <div className="cart__quantity">28</div>
      </div>

      <div className="filter">
        <div className="filter__left">
          <p>16 Product(s) found.</p>
        </div>
        <div className="sort">
          <span>Order by</span>
          <select>
            <option value="">Select</option>
            <option value="">Lowest to highest</option>
            <option value="">Highest to lowest</option>
          </select>
        </div>
      </div>

      <div className="grid">

        <Card
          imgUrl={"/img/img1.jpg"}
          title={"Cat Tee Black T-Shirt"}
          price={"10.90"}
        />

        <Card
          imgUrl={"/img/img2.jpg"}
          title={"Cat Tee Black T-Shirt"}
          price={"12.00"}
        />

      </div>
    </div>
  );
}

export default App;