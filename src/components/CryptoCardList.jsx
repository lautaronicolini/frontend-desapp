import React from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';

const baseURL = 'http://localhost:8080/api/crypto/prices'

export default class CryptoCardList extends React.Component {
    state = { cryptos: [] }

   componentDidMount() {
     //TODO if not authenticated -- props.redirecttoLogin
     console.log("saved token", localStorage.getItem('SavedToken'))
     const headers = {
       'Authorization': 'Bearer '+ localStorage.getItem('SavedToken'),
       'Content-Type': 'application/json'
      }
    axios.get(baseURL, { headers: headers})
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
