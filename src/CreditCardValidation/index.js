import React from 'react';
import './index.css';

export default class CreditCardValidation extends React.Component {
  state = {
    cardNumber: undefined
  }

  render() {
    const {
      cardNumber
    } = this.state;

    return (
      <form className="card">
        <label htmlFor="cardNumber">Card Number:</label>
        <div>
          <input
            type="string"
            id="cardNumber"
            maxLength="16"
            value={cardNumber}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}