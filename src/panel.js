import React, { Component } from 'react';
import './panel.css';

class Panel extends Component {
  render() {
    let currency = this.props.pair.substr(0, this.props.pair.indexOf(' '));
    let sellPriceFirstDigits = this.props.sell.toString().substr(0, 4);
    let sellPriceMiddleDigits = this.props.sell.toString().substr(4, 2);
    let sellPriceLastDigit = this.props.sell.toString().substr(6);
    let buyPriceFirstDigits = this.props.buy.toString().substr(0, 4);
    let buyPriceMiddleDigits = this.props.buy.toString().substr(4, 2);
    let buyPriceLastDigit = this.props.buy.toString().substr(6);
    return (
      <div className='panel'>
        <div className='panel-header'>{this.props.pair}</div>
        <div className='panel-content'>
          <span className='panel-content-sell'>
            <p className='label'>Sell {currency}</p>
            <p className='price-sell'>
              <span className='start-digit'>{sellPriceFirstDigits}</span>
              <span className='middle-digits'>{sellPriceMiddleDigits}</span>
              <span className='last-digit'>{sellPriceLastDigit}</span>
            </p>
            <div className='triangle-outer-left'>
              <div className='triangle-inner-left'>&nbsp;</div>
            </div>
          </span>
          <span className={this.props.hasBuyPriceIncreased ? 'increased' : 'decreased'}></span>
          <span className='panel-content-buy'>
            <p className='label'>Buy {currency}</p>
            <p className='price-buy'>
              <span className='first-digits'>{buyPriceFirstDigits}</span>
              <span className='middle-digits'>{buyPriceMiddleDigits}</span>
              <span className='last-digit'>{buyPriceLastDigit}</span>
            </p>
            <div className='triangle-outer-right'>
              <div className='triangle-inner-right'>&nbsp;</div>
            </div>
          </span>
        </div>
      </div>
    );
  };
};

export default Panel;
