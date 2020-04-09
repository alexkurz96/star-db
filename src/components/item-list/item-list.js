import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

const ItemList = (props) => {
  const {data, errorMessage, spinner, 
    onItemSelected, children} = props;
  let content = null;
  if (data && !errorMessage && !spinner) {
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

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.func.isRequired
};

export default ItemList;