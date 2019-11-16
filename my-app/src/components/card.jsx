import React from 'react';

function Card(props) {
  return (
    <div className="grid-item">
      <div className="grid-item__img">
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="grid-item__title">{props.title}</div>
      <div className="grid-item__price">$<strong>{props.price}</strong></div>
      <div className="grid-item__btn">
        <button className="">Add to cart</button>
      </div>
    </div>
  );
}

export default Card;