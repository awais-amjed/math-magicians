import React from 'react';
import './Calculator.scss';
import PropTypes from 'prop-types';

const CalculatorButton = ({ text, takesDoubleSpace }) => (
  <button type="button" className={takesDoubleSpace ? 'calculator-button double-flex' : 'calculator-button'}>{text}</button>
);

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  takesDoubleSpace: PropTypes.bool,
};

CalculatorButton.defaultProps = {
  takesDoubleSpace: false,
};

export default CalculatorButton;
