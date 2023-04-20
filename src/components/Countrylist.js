import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountries } from '../redux/country/countrySlice';
import './styles/countrylist.css';

const Countrylist = () => {
  const {
    countryList, totalCountry, isLoading, error,
  } = useSelector((state) => state.country);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  },
  [dispatch]);

  if (isLoading) {
    return (
      <div>
        <i className="fa-li fa fa-spinner fa-spin" />
        <h1>Loading ...</h1>
      </div>
    );
  }
  if (error !== null) {
    return (
      <h1>
        {' '}
        {error}
      </h1>

    );
  }

  return (
    <div className="container">
      <header className="heading">
        <article className="summary">
          <h2 className="nocontry">Global Population</h2>
          <h4 className="globalpopulation">{totalCountry.toLocaleString()}</h4>
        </article>
      </header>

      <input type="search" placeholder="Search Country by name" value={input} onChange={(e) => (setInput(e.target.value))} />
      <h2 className="title"> POPULATION BY COUNTRY</h2>
      <section className="countrycontainer">
        { countryList.filter((value) => {
          if (input === '') {
            return value;
          }
          if (value.countryName.toLowerCase().includes(input.toLowerCase())) {
            return value;
          }
          return false;
        })

          .map((list) => (
            <div key={list.id} className="countrycard">
              <NavLink to={`/detail/${list.id}`} className="displaycard">
                <div>
                  <img src={list.countryFlag} alt={list.countryFlag} className="flag" />
                  <i className="fa fa-arrow-right" aria-hidden="true" />

                </div>

                <h2 className="name">{list.countryName}</h2>
                <h2 className="globalpopulation pop">
                  Population:
                  {list.population.toLocaleString()}
                </h2>

              </NavLink>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Countrylist;
