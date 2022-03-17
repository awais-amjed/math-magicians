import React from 'react';
import './calculator.scss';
import CalculatorButton from './calculator_button';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayOutput: '0',
      total: null,
      next: null,
      operation: null,
    };

    this.performCalculation = this.performCalculation.bind(this);
  }

  performCalculation(buttonName) {
    const { total, next, operation } = calculate(this.state, buttonName);
    let { displayOutput } = this.state;

    if (total || next || operation) {
      displayOutput = (total ?? '') + (operation == null ? '' : ` ${operation} `) + (next ?? '');
    } else {
      displayOutput = '0';
    }

    this.setState({
      displayOutput,
      total,
      next,
      operation,
    });
  }

  render() {
    const { displayOutput } = this.state;

    return (
      <div id="calculator">
        <div className="calculator-row">
          <p id="display-bar">{displayOutput}</p>
        </div>
        <div className="calculator-row">
          <CalculatorButton text="AC" performCalculation={this.performCalculation} />
          <CalculatorButton text="+/-" performCalculation={this.performCalculation} />
          <CalculatorButton text="%" performCalculation={this.performCalculation} />
          <CalculatorButton text="÷" performCalculation={this.performCalculation} />
        </div>
        <hr />
        <div className="calculator-row">
          <CalculatorButton text="7" performCalculation={this.performCalculation} />
          <CalculatorButton text="8" performCalculation={this.performCalculation} />
          <CalculatorButton text="9" performCalculation={this.performCalculation} />
          <CalculatorButton text="x" performCalculation={this.performCalculation} />
        </div>
        <hr />
        <div className="calculator-row">
          <CalculatorButton text="4" performCalculation={this.performCalculation} />
          <CalculatorButton text="5" performCalculation={this.performCalculation} />
          <CalculatorButton text="6" performCalculation={this.performCalculation} />
          <CalculatorButton text="-" performCalculation={this.performCalculation} />
        </div>
        <hr />
        <div className="calculator-row">
          <CalculatorButton text="1" performCalculation={this.performCalculation} />
          <CalculatorButton text="2" performCalculation={this.performCalculation} />
          <CalculatorButton text="3" performCalculation={this.performCalculation} />
          <CalculatorButton text="+" performCalculation={this.performCalculation} />
        </div>
        <hr />
        <div className="calculator-row">
          <CalculatorButton text="0" takesDoubleSpace performCalculation={this.performCalculation} />
          <CalculatorButton text="." performCalculation={this.performCalculation} />
          <CalculatorButton text="=" performCalculation={this.performCalculation} />
        </div>
      </div>
    );
  }
}

export default Calculator;
