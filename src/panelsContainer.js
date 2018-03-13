import React, { Component } from 'react';
import Panel from './panel';

class PanelsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
    this.tick = this.tick.bind(this)
    this.updatePrices = this.updatePrices.bind(this)
    this.createPanels = this.createPanels.bind(this)
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.updatePrices()
  }
  updatePrices() {
    let updatedData = this.state.data.map((priceInfo) => {
      let newPriceInfo = Object.assign({}, priceInfo);
      newPriceInfo.sell = (newPriceInfo.sell*this.getRandomArbitrary(0.9, 1.1)).toString().substr(0, 7);
      newPriceInfo.buy = (newPriceInfo.buy*this.getRandomArbitrary(0.9, 1.1)).toString().substr(0, 7);
      if (newPriceInfo.buy > priceInfo.buy) {
        newPriceInfo.hasBuyPriceIncreased = true
      } else {
        newPriceInfo.hasBuyPriceIncreased = false
      }
      return newPriceInfo
    });
    this.setState({data: updatedData})
  }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  render() {
    return(
      <div>
        <div className='container'>{this.createPanels()}</div>
      </div>
    );
  }
  getData() {
    return [
      {
        pair: 'USD CHF',
        buy: 0.99143,
        sell: 0.99043,
        id: 1,
        hasBuyPriceIncreased: false
      },
      {
        pair: 'GBP USD',
        buy: 1.28495,
        sell: 1.2836,
        id: 2,
        hasBuyPriceIncreased: false
      },
      {
        pair: 'GBP CHF',
        buy: 1.27378,
        sell: 1.27147,
        id: 3,
        hasBuyPriceIncreased: false
      },
      {
        pair: 'EUR SEK',
        buy: 9.632,
        sell: 9.6055,
        id: 4,
        hasBuyPriceIncreased: false
      },
      {
        pair: 'USD JPY',
        buy: 110.467,
        sell: 110.417,
        id: 5,
        hasBuyPriceIncreased: false
      },
      {
        pair: 'EUR JPY',
        buy: 120.589,
        sell: 120.491,
        id: 6,
        hasBuyPriceIncreased: false
      }
    ];
  }
  createPanels() {
    return this.state.data.map((data) => {
      return (
        <Panel
          hasBuyPriceIncreased={data.hasBuyPriceIncreased}
          pair={data.pair}
          buy={data.buy}
          sell={data.sell}
          key={data.id}
        />
      )
    });
  }
}

export default PanelsContainer;
