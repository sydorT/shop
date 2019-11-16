import React, { useState } from 'react';
import './App.css';
import './shop.sass';
import Grid from './components/Grid'

function App() {

  const [isCartOpen, setCartOpen] = useState(false);

  const cartOpen = () => {
    setCartOpen(true);
  }

  const cartClose = () => {
    setCartOpen(false);
  }

  const cartClass = () => {
    return isCartOpen === true ? 'active' : '';
  }

  return (
    <div className="App">

      <div className={`cart ${cartClass()}`}>
        <div className="cart__btn" onClick={() => cartOpen()}>
          <div className="cart__quantity">28</div>
        </div>
        <div className="cart__close" onClick={() => cartClose()}></div>

        <div className="cart-items">
          <div className="cart-item">

            <div className="cart-item__left">
              <div className="cart-item__img">
                <img src="" alt=""/>
              </div>
              <div className="cart-item__info">
                <div className="cart-item__title">Title</div>
                <div className="cart-item__quantity">Quantity: 1</div>
              </div>
            </div>

            <div className="cart-item__right">
              <div className="cart__close"></div>
            </div>
          </div>
        </div>
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

      <Grid />

    </div>
  );
}

export default App;