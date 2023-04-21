import {
  render, screen, cleanup,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Detail from '../components/Detail';

afterEach(cleanup);

describe('NavBar component', () => {
  test('renders the countries information in the store', async () => {
    const country = {
      id: 'Barbados', countryName: 'Barbados', capital: ['Bridgetown'], countryFlag: 'https://flagcdn.com/w320/bb.png', population: 287371, coatofarm: { png: 'https://mainfacts.com/media/images/coats_of_arms/bb.png' }, continents: ['North America'], area: 430.0,
    };
    const mockStore = configureStore({});
    const store = mockStore({
      country: {
        countryList: [country], totalCountry: 2, isLoading: false, error: null,
      },
    });
    const goodRoute = '/detail/Barbados/';

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[goodRoute]}>
          <Detail />

        </MemoryRouter>
      </Provider>,

    );

    expect(screen.getByTestId('hello')).toBeInTheDocument();
    expect(screen.getByText('Barbados')).toBeInTheDocument();
  });
});

// // test('renders the countries information in the store', async () => {

// //   const country = {
// //     id: 'Barbados', countryName: 'Barbados', capital: ['Bridgetown'], countryFlag: 'https://flagcdn.com/w320/bb.png', population: 287371, coatofarm: {png:'https://mainfacts.com/media/images/coats_of_arms/bb.png'}, continents: ['North America'], area: 430.0,
// //   };
// //   const mockStore = configureStore({});
// //   const store = mockStore({
// //     country: {
// //       countryList: [country], totalCountry: 2, isLoading: false, error: null,
// //     },
// //   });

// //   const { asFragment } = render(
// //     <Provider store={store}>
// //       <BrowserRouter>

// //         <Detail/>

// //       </BrowserRouter>
// //     </Provider>,

// //   );

// //   expect(asFragment()).toMatchSnapshot();
// // });
