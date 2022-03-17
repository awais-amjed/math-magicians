import React from 'react';
import './calculator.scss';
import PropTypes from 'prop-types';

const CalculatorButton = ({ text, performCalculation, takesDoubleSpace }) => {
  CalculatorButton.propTypes = {
    text: PropTypes.string.isRequired,
    takesDoubleSpace: PropTypes.bool,
    performCalculation: PropTypes.func.isRequired,
  };

  CalculatorButton.defaultProps = {
    takesDoubleSpace: false,
  };

  return (
    <button type="button" className={takesDoubleSpace ? 'calculator-button double-flex' : 'calculator-button'} onClick={() => performCalculation(text)}>{text}</button>
  );
};

export default CalculatorButton;
