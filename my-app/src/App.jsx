import React, { useState } from 'react';
import './App.css';
import './shop.sass';
import Grid from './components/Grid'
import Filter from './components/Filter'

function App() {
  const db = {
    products: [
      { id: 1, title: 'Cat Tee T-Shirt', price: '15.00', size: 'M', img: "/img/img1.jpg" },
      { id: 2, title: 'Cat Black T-Shirt', price: '11.90', size: 'L', img: "/img/img2.jpg" },
      { id: 3, title: 'Cat Tee Black D-Shirt', price: '19.40', size: 'S', img: "/img/img3.jpg" },
      { id: 4, title: 'Cat Tee W-Shirt', price: '24.80', size: 'L', img: "/img/img4.jpg" }
    ]
  }

  const [productsInCart, setProductsInCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('select');
  const [selectedSize, setSelectedSize] = useState([]);

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

  const increaseQuantity = (item) => {
    const updatedProducts = productsInCart.map((value) => {
      if (value.id === item.id) {
        return { ...value, quantity: (value.quantity || 1) + 1 };
      } else {
        return value;
      }
    });
    setProductsInCart(updatedProducts);
  }

  const decreaseQuantity = (item) => {
    const updatedProducts = productsInCart.map((value) => {
      if (value.id === item.id) {
        return { ...value, quantity: (value.quantity || 1) - 1 };
      } else {
        return value;
      }
    });
    setProductsInCart(updatedProducts);
  }

  const productsFiltered = () => {
    if (selectedSize.length !== 0) {
      return db.products.filter(item => {
        const isExist = selectedSize.some(size => size === item.size);
        return isExist && item;
      });
    } else {
      return db.products;
    }
  }

  const productsSort = () => {
    if (selectedOption === 'select') {
      return productsFiltered();
    }
    else if (selectedOption === 'lowest') {
      return productsFiltered().sort((a, b) => {
        return a.price - b.price;
      });
    } else if (selectedOption === 'highest') {
      return productsFiltered().sort((a, b) => {
        return b.price - a.price;
      });
    }
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
                    <div className="cart-item__quantity">Quantity: {item.quantity > 1 ? item.quantity : '1'}</div>
                  </div>
                </div>

                <div className="cart-item__right">
                  <div className="cart__close" onClick={() => removeProductFromCart(item)}></div>
                  <div className="cart-item__price">$ {item.price}</div>
                  <div className="cart-item__controls">
                    <div className="control-btn" onClick={() => decreaseQuantity(item)}>-</div>
                    <div className="control-btn" onClick={() => increaseQuantity(item)}>+</div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>

      <Filter data={db}
        setSelectedOption={setSelectedOption}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        productsSort={productsSort()}
      />

      <Grid data={db}
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
        selectedOption={selectedOption}
        selectedSize={selectedSize}
        productsSort={productsSort()}
      />

    </div>
  );
}

export default App;