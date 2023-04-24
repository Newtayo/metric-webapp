import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from '../redux/store';
import Header from '../components/Header';
import MockAxios, { mockResponse } from '../__mocks__/axios';
import { getCountries } from '../redux/country/countrySlice';

afterEach(cleanup);
describe('tests for components', () => {
  test('Snapshot test for Header', () => {
    const homepage = render(
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    expect(homepage).toMatchSnapshot();
  });

  test('Snapshot test for Header', async () => {
    jest.mock('axios');

    MockAxios.get.mockResolvedValue(mockResponse);

    render(
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );

    const { type } = await Store.dispatch(getCountries());
    expect(type).toEqual('countryList/getCountries/fulfilled');
    expect(Store.getState().country.countryList[0].countryName).toContain('Barbados');
    expect(Store.getState().country.totalCountry).toEqual(287371);
  });
});
