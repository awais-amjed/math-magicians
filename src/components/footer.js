import React from 'react';
import './footer.scss';
import theEnd from '../images/end.png';

const Footer = () => (
  <footer>
    <p>
      Copyright @
      {new Date().getFullYear()}
    </p>
    <img src={theEnd} alt="end" width="35" />
  </footer>
);

export default Footer;
