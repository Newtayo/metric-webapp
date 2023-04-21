import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const id = 'Barbados';

  const detailsinfo = useSelector((state) => state.country).countryList
    .filter((mis) => (mis.id === id));

  return (
    <div className="detailcontainer">
      <img src={detailsinfo[0].coatofarm.png} alt="coat of arm" className="coat" />
      <table>
        <tbody>
          <tr>
            <td>Country Name</td>
            <td>{detailsinfo[0].countryName}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{detailsinfo[0].population.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Capital</td>
            <td>{detailsinfo[0].capital}</td>
          </tr>
          <tr>
            <td>Continent</td>
            <td>{detailsinfo[0].continents}</td>
          </tr>
          <tr>
            <td> Land Area</td>
            <td>
              {detailsinfo[0].area}
              {' '}
              KM&#178;
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Detail;
