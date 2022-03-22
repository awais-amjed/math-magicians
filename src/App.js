import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home_page';
import CalculatorPage from './pages/calculator_page';
import QuotePage from './pages/quote_page';

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="quote" element={<QuotePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
