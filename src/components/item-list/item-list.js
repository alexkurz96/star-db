import React from 'react';

import {withData} from '../hoc-helpers';

import './item-list.css';

const ItemList = (props) => {
  const {data, errorMessage, spinner, 
    onItemSelected, children} = props;
  let content = null;
  if (data && !errorMessage) {
    content = data.map((item) => {
      const {id} = item;
      const label = children(item);
      return (
        <li 
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  return (
    <React.Fragment>
      {spinner}
      {errorMessage}
      <ul className="item-list list-group">
        {content}
      </ul>
    </React.Fragment>
  );
};

export default ItemList;