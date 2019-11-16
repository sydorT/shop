import React, { useState } from 'react';
import './App.css';
import './shop.sass';
import Grid from './components/Grid'

function App() {
  const db = {
    items: [
      { id: 1, title: 'Cat Tee T-Shirt', price: 110, size: 'm', img: "/img/img1.jpg" },
      { id: 2, title: 'Cat Black T-Shirt', price: 110, size: 'l', img: "/img/img2.jpg" },
      { id: 3, title: 'Cat Tee Black D-Shirt', price: 110, size: 's', img: "/img/img3.jpg" },
      { id: 4, title: 'Cat Tee W-Shirt', price: 110, size: 'xs', img: "/img/img4.jpg" }
    ],
    addedItems: [],
    total: 0
  }

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
          <p>{db.items.length} Product(s) found.</p>
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

      <Grid data={db} />

    </div>
  );
}

export default App;