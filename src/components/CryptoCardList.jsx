import React from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';
import  Navbar  from './Navbar';

const baseURL = 'http://localhost:8080/crypto/prices'

export default class CryptoCardList extends React.Component {
    state = { cryptos: [] }

   componentDidMount() {
    axios.get(baseURL)
      .then(res => {
        const cryptos = res.data;
        this.setState({ cryptos });
      })
  }

  render() {
    return (
    <div>
      <Navbar/>
      <div className="flexbox">
        { this.state.cryptos.map(crypto => <CryptoCard symbol={crypto.symbol} price={crypto.price} dateOfPrice={crypto.dateOfPrice}/>)}
      </div>
    </div>
    )
  }
}