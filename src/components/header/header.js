import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import './header.css';

const Header = ({onServiceChange, location}) => {

  const buttonsData = [
    {name: 'people', label: 'People'},
    {name: 'planets', label: 'Planets'},
    {name: 'starships', label: 'Starships'},
    {name: 'login', label: 'Login'},
    {name: 'secret', label: 'Secret'}
  ];
  
  const buttons = buttonsData.map(({name, label}) => {
    const isActive = location.pathname.split('/')[1] === name;
    const clazz = isActive ? 'active' : '';
    return (
      <li
        key={name}
      >
        <Link 
          to={`/${name}/`}
          className={clazz}
        >
          {label}
        </Link>
      </li>
    );
  });

  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          Star DB
        </Link>
      </h3>
      <ul className="d-flex">
        {buttons}
      </ul>
      <button
        onClick={onServiceChange}
        className="btn btn-primary btn-sm"
      >
        Change service
      </button>
    </div>
  );
};

export default withRouter(Header);