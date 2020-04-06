import React from 'react';

import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({data, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{data[field]}</span>
    </li>
  );
};

export {
  Record
};

const ItemDetails = (props) => {
  const {data, image, errorMessage, spinner, children} = props;
  let content = null;
  if (data && !spinner && !errorMessage) {
    const {name} = data;
    content = (
      <React.Fragment>
        <img className="item-image"
            src={image}
            alt="item img" />
  
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(children, (child) => {
                return React.cloneElement(child, {data});
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </React.Fragment>
    );
  } else if (!spinner && !errorMessage) {
    content = <span>click on the left to find out more</span>;
  }

  return (
    <div className="item-details card">
      {spinner}
      {content}
      {errorMessage}
    </div>
  );
};

export default ItemDetails;

