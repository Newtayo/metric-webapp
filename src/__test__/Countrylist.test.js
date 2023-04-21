import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Countrylist from '../components/Countrylist';

test('renders the countries information in the store', async () => {
  const country = {
    id: 'Barbados', countryName: 'Barbados', capital: ['Bridgetown'], countryFlag: 'https://flagcdn.com/w320/bb.png', population: 287371, 'coatofarm:': 'https://mainfacts.com/media/images/coats_of_arms/bb.png', continents: ['North America'], area: 430.0,
  };
  const mockStore = configureStore({});
  const store = mockStore({
    country: {
      countryList: [country], totalCountry: 2, isLoading: false, error: null,
    },
  });

  render(
    <Provider store={store}>
      <BrowserRouter>

        <Countrylist />

      </BrowserRouter>
    </Provider>,

  );

  expect(screen.getByTestId('hello')).toBeInTheDocument();
  expect(screen.getByText('Barbados')).toBeInTheDocument();
});

test('renders the countries information in the store', async () => {
  const country = {
    id: 'Barbados', countryName: 'Barbados', capital: ['Bridgetown'], countryFlag: 'https://flagcdn.com/w320/bb.png', population: 287371, 'coatofarm:': 'https://mainfacts.com/media/images/coats_of_arms/bb.png', continents: ['North America'], area: 430.0,
  };
  const mockStore = configureStore({});
  const store = mockStore({
    country: {
      countryList: [country], totalCountry: 2, isLoading: false, error: null,
    },
  });

  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>

        <Countrylist />

      </BrowserRouter>
    </Provider>,

  );

  expect(asFragment()).toMatchSnapshot();
});
