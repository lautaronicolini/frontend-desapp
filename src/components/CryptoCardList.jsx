import React from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';
import  Navbar  from './Navbar';


const baseURL = 'http://localhost:8080/crypto/prices'

export default class CryptoCardList extends React.Component {
    state = { cryptos: [] }

   componentDidMount() {
    if(localStorage.getItem('Token')===null) {
      localStorage.setItem('Token', this.props.token)
        }
    var token = localStorage.getItem('Token') 

    axios.get(baseURL, { headers:{ Authentication:'Bearer ' + token }})
      .then(res => {
        const cryptos = res.data;
        this.setState({ cryptos });
      
      })
  }

  render() {
    return (
    <div>
      <div className="flexbox">
        { this.state.cryptos.map(crypto => <CryptoCard symbol={crypto.symbol} price={crypto.price} dateOfPrice={crypto.dateOfPrice}/>)}
      </div>
    </div>
    )
  }
}