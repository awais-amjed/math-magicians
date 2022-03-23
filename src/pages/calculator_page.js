import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './calculator_page.scss';
import Calculator from '../components/calculator';

const CalculatorPage = () => (
  <div>
    <Navbar />
    <div className="content">
      <div id="calculator-page">
        <div id="description">
          <h2>Let&apos;s do some math!</h2>
          <img src="https://media.giphy.com/media/WMRb9p6N4mtIRtE2zr/giphy.gif" alt="gif" height="200" />
        </div>
        <div id="calculator-container">
          <Calculator />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default CalculatorPage;
