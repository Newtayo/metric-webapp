import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
import { useDispatch } from 'react-redux';
import { getCountries } from '../redux/country/countrySlice';

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  },
  [dispatch]);

  return (
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
};

export default Header;
