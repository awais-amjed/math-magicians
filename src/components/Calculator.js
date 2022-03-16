import React from 'react';
import './Calculator.scss';
import CalculatorButton from './CalculatorButton';

const Calculator = () => (
  <div id="calculator">
    <div className="calculator-row">
      <p id="display-bar">0</p>
    </div>
    <div className="calculator-row">
      <CalculatorButton text="AC" />
      <CalculatorButton text="+/-" />
      <CalculatorButton text="%" />
      <CalculatorButton text="÷" />
    </div>
    <div className="calculator-row">
      <CalculatorButton text="7" />
      <CalculatorButton text="8" />
      <CalculatorButton text="9" />
      <CalculatorButton text="x" />
    </div>
    <div className="calculator-row">
      <CalculatorButton text="4" />
      <CalculatorButton text="5" />
      <CalculatorButton text="6" />
      <CalculatorButton text="-" />
    </div>
    <div className="calculator-row">
      <CalculatorButton text="1" />
      <CalculatorButton text="2" />
      <CalculatorButton text="3" />
      <CalculatorButton text="+" />
    </div>
    <div className="calculator-row">
      <CalculatorButton text="0" takesDoubleSpace />
      <CalculatorButton text="." />
      <CalculatorButton text="=" />
    </div>
  </div>
);

export default Calculator;
