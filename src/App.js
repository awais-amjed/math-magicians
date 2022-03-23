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
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
