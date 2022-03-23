import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './home_page.scss';

const HomePage = () => (
  <div>
    <Navbar />
    <div className="content">
      <div id="home-page">
        <h2>- Welcome to Our Page -</h2>
        <div id="welcome-images">
          <img src="https://media.giphy.com/media/QCdZ8ZtDe9uERX8XEv/giphy.gif" alt="gif" height="200" />
          <img src="https://media.giphy.com/media/YatSY0aqkm8UUQp69C/giphy.gif" alt="gif" height="200" />
          <img src="https://media.giphy.com/media/5ddqGqO8x5rrJ7v5tf/giphy.gif" alt="gif" height="200" />
        </div>
        <p>
          Good Timing though, We are having a Party and MATH is confused!
          <br />
          Maybe help it by performing some calculations on the calculator?
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default HomePage;
