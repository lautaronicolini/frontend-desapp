import React, { Component } from 'react'
import '../styles/CryptoCard.css'
import axios from 'axios'

const baseURL = 'http://localhost:8080/criptoP2P_API/transaction/create'


class CryptoCard extends Component {    
    constructor(){
        super()
        this.state = {
            operationType: "NONE"
        }
        this.handleClick = this.handleClick.bind(this)
        this.createTransaction = this.createTransaction.bind(this)
    }
    
    createTransaction(){
        axios.post(baseURL, {
            crypto: this.props.symbol,
            operationType: this.state.operationType,
            nominalAmount: 100,
            unitPriceARS: this.props.price,
            creatorUser: "myemail@gmail.com"
        })
        .then(res => {
            const cryptos = res.data;
            this.setState({ cryptos });
        })
    }

    handleClick(e){
        this.setState({operationType: e.target.id}, () => {this.createTransaction()})
    }

render(){
    let {symbol, price, dateOfPrice} = this.props 
    return (
        <div className="cryptoCard">
            <div className="flexbox">
                <div>
                    <p className="symbol">{symbol}</p>
                    <p className="price">ARS {price}</p>
                    <p>{dateOfPrice}</p>    
                </div>
                <div>
                    <button id="BUY" onClick={this.handleClick}>Comprar</button>
                    <button id="SELL" onClick={this.handleClick}>Vender</button>
                </div>
            </div>
        </div>
        )
    }
}

export default CryptoCard