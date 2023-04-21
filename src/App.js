import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Countrylist from './components/Countrylist';
import Detail from './components/Detail';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Countrylist />} exact />
          <Route path="/detail/:id" element={<Detail />} exact />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
