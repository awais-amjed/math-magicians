import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './quote_page.scss';
import einstein from '../images/einstein.png';
import galileo from '../images/galileo.png';

const QuotePage = () => (
  <div>
    <Navbar />
    <div className="content">
      <div id="quote-page">
        <h2>Big Brain Time!</h2>
        <div id="quote-images">
          <img src={galileo} alt="" height="350px" />
          <img src={einstein} alt="" height="350px" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default QuotePage;
