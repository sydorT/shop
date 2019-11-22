import React from 'react';

function Filter(props) {

  const change = (e) => {
    props.setSelectedOption(e.target.value);
  }

  const selectSize = (e) => {
    const isExist = props.selectedSize.some(item => item === e.target.textContent);
    if (isExist) {
      const filteredSizes = props.selectedSize.filter(item => item !== e.target.textContent);
      props.setSelectedSize(filteredSizes);
    } else {
      props.setSelectedSize([...props.selectedSize, e.target.textContent]);
    }
  }

  const isSizeActive = (size) => {
    const isActiveSize = props.selectedSize.some(item => item === size);
    if (isActiveSize) {
      return 'active';
    } else {
      return '';
    }
  }

  const sizes = props.data.products.map((item) => {
    return item.size;
  });

  const sizesUnique = [...new Set(sizes)];

  return (
    <div className="filter">
      <div className="filter__left">
        <p>{props.data.products.length} Product(s) found.</p>
      </div>

      <div className="filter__size">

        {sizesUnique.map((item, index) => {
          return (
            <div key={index} className={`filter__size-item ${isSizeActive(item)}`} onClick={(e) => selectSize(e)}>{item}</div>
          )
        })}
      </div>

      <div className="sort">
        <span>Order by</span>
        <select onChange={(e) => change(e)}>
          <option value="select">Select</option>
          <option value="lowest">Lowest to highest</option>
          <option value="highest">Highest to lowest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;