import React, { useState } from 'react';
import './calculator.scss';
import CalculatorButton from './calculator_button';
import calculate from './logic/calculate';

const Calculator = () => {
  const [calculator, setCalculatorState] = useState(
    {
      displayOutput: '0',
      total: 0,
      next: null,
      operation: null,
    },
  );

  let { displayOutput } = calculator;

  const performCalculation = (buttonName) => {
    const { total, next, operation } = calculate(calculator, buttonName);

    if (total || next || operation) {
      displayOutput = (total ?? '') + (operation == null ? '' : ` ${operation} `) + (next ?? '');
    } else {
      displayOutput = '0';
    }

    setCalculatorState({
      displayOutput,
      total: total ?? 0,
      next,
      operation,
    });
  };

  return (
    <div id="calculator">
      <div className="calculator-row">
        <p id="display-bar">{displayOutput}</p>
      </div>
      <div className="calculator-row">
        <CalculatorButton text="AC" performCalculation={performCalculation} />
        <CalculatorButton text="+/-" performCalculation={performCalculation} />
        <CalculatorButton text="%" performCalculation={performCalculation} />
        <CalculatorButton text="÷" performCalculation={performCalculation} />
      </div>
      <hr />
      <div className="calculator-row">
        <CalculatorButton text="7" performCalculation={performCalculation} />
        <CalculatorButton text="8" performCalculation={performCalculation} />
        <CalculatorButton text="9" performCalculation={performCalculation} />
        <CalculatorButton text="x" performCalculation={performCalculation} />
      </div>
      <hr />
      <div className="calculator-row">
        <CalculatorButton text="4" performCalculation={performCalculation} />
        <CalculatorButton text="5" performCalculation={performCalculation} />
        <CalculatorButton text="6" performCalculation={performCalculation} />
        <CalculatorButton text="-" performCalculation={performCalculation} />
      </div>
      <hr />
      <div className="calculator-row">
        <CalculatorButton text="1" performCalculation={performCalculation} />
        <CalculatorButton text="2" performCalculation={performCalculation} />
        <CalculatorButton text="3" performCalculation={performCalculation} />
        <CalculatorButton text="+" performCalculation={performCalculation} />
      </div>
      <hr />
      <div className="calculator-row">
        <CalculatorButton text="0" takesDoubleSpace performCalculation={performCalculation} />
        <CalculatorButton text="." performCalculation={performCalculation} />
        <CalculatorButton text="=" performCalculation={performCalculation} />
      </div>
    </div>
  );
};

export default Calculator;
