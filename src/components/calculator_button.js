import React from 'react';
import './calculator.scss';
import PropTypes from 'prop-types';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleCalculation = this.handleCalculation.bind(this);
  }

  handleCalculation() {
    const { text, performCalculation } = this.props;
    performCalculation(text);
  }

  render() {
    const { text, takesDoubleSpace } = this.props;
    return (
      <button type="button" className={takesDoubleSpace ? 'calculator-button double-flex' : 'calculator-button'} onClick={this.handleCalculation}>{text}</button>
    );
  }
}

CalculatorButton.propTypes = {
  text: PropTypes.string.isRequired,
  takesDoubleSpace: PropTypes.bool,
  performCalculation: PropTypes.func.isRequired,
};

CalculatorButton.defaultProps = {
  takesDoubleSpace: false,
};

export default CalculatorButton;
