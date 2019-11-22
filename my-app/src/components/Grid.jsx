import React from 'react';

function Grid(props) {

  const addToCart = (item) => {
    props.setProductsInCart([...props.productsInCart, item]);
  }

  const productsFiltered = () => {
    if (props.selectedOption === 'select') {
      return props.data.products;
    }
    else if (props.selectedOption === 'lowest') {
      return props.data.products.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (props.selectedOption === 'highest') {
      return props.data.products.sort((a, b) => {
        return b.price - a.price;
      });
    }
  }

  return (
    <div className="grid">

      {productsFiltered().map((item, index) => {
        return (
          <div key={index} className="grid-item" onClick={() => addToCart(item)}>
            <div className="grid-item__img">
              <img src={item.img} alt="" />
            </div>
            <div className="grid-item__title">{item.title}</div>
            <div className="grid-item__price">$<strong>{item.price}</strong></div>
            <div className="grid-item__btn">
              <button className="">Add to cart</button>
            </div>
          </div>
        )
      })}

    </div>
  );
}

export default Grid;