import React from 'react';

function Grid(props) {

  const addToCart = (item) => {
    props.setProductsInCart([...props.productsInCart, item]);
    console.log(props.productsInCart);
  }

  return (
    <div className="grid">

      {props.data.products.map((item, index) => {
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