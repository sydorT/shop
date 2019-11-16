import React, { useState } from 'react';

function Grid() {
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

  const [array, setArray] = useState([]);

  const addToCart = () => {

  }

  return (
    <div className="grid">

      {db.items.map((item, index) => {
        return (
          <div key={index} className="grid-item" onClick={() => addToCart()}>
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