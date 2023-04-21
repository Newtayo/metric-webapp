import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from '../redux/store';
import Header from '../components/Header';

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
});
