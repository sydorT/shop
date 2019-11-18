import React, { useState } from 'react';
import './App.css';
import './shop.sass';
import Grid from './components/Grid'

function App() {
  const db = {
    products: [
      { id: 1, title: 'Cat Tee T-Shirt', price: '11.90', size: 'M', img: "/img/img1.jpg" },
      { id: 2, title: 'Cat Black T-Shirt', price: '15.00', size: 'L', img: "/img/img2.jpg" },
      { id: 3, title: 'Cat Tee Black D-Shirt', price: '19.40', size: 'S', img: "/img/img3.jpg" },
      { id: 4, title: 'Cat Tee W-Shirt', price: '24.80', size: 'XS', img: "/img/img4.jpg" }
    ]
  }

  const [productsInCart, setProductsInCart] = useState([]);
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

  const removeProductFromCart = (item) => {
    const filteredProducts = productsInCart.filter(value => value !== item);
    setProductsInCart(filteredProducts);
  }

  return (
    <div className="App">

      <div className={`cart ${cartClass()}`}>
        <div className="cart__btn" onClick={() => cartOpen()}>
          <div className="cart__quantity">{productsInCart.length}</div>
        </div>
        <div className="cart__close" onClick={() => cartClose()}></div>

        <div className="cart-items">

          {productsInCart.map((item, index) => {
            return (
              <div key={index} className="cart-item">

                <div className="cart-item__left">
                  <div className="cart-item__img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cart-item__info">
                    <div className="cart-item__title">{item.title}</div>
                    <div className="cart-item__size">{item.size}</div>
                    <div className="cart-item__quantity">Quantity: 1</div>
                  </div>
                </div>

                <div className="cart-item__right">
                  <div className="cart__close" onClick={() => removeProductFromCart(item)}></div>
                  <div className="cart-item__price">$ {item.price}</div>
                  <div className="cart-item__controls">
                    <div className="control-btn">-</div>
                    <div className="control-btn">+</div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

      <div className="filter">
        <div className="filter__left">
          <p>{db.products.length} Product(s) found.</p>
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

      <Grid data={db} productsInCart={productsInCart} setProductsInCart={setProductsInCart} />

    </div>
  );
}

export default App;