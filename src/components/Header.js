import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';

const Header = () => (
  <div className="header">
    <NavLink to="/" className="back">
      {' '}
      <i className="fa fa-arrow-left" aria-hidden="true" />
    </NavLink>
    <h1 className="apptitle"> World Population </h1>
    <i className="fa fa-microphone" aria-hidden="true" />
    <i className="fa fa-cog" aria-hidden="true" />
  </div>
);

export default Header;
