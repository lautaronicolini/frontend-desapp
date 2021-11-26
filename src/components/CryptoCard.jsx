import React, { Component } from 'react'
import '../styles/CryptoCard.css'
import axios from 'axios'
import {toast, ToastContainer} from "react-toastify";

const baseURL = 'http://localhost:8080/api/transaction/create'


class CryptoCard extends Component {    
    constructor(){
        super()
        this.state = {
            operationType: "NONE",
            nominalAmount: 0
        }
        this.createTransaction = this.createTransaction.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    createTransaction(){
        axios.post(baseURL, {
            crypto: this.props.symbol,
            operationType: this.state.operationType,
            nominalAmount: this.state.nominalAmount,
            unitPriceARS: this.props.price,
            creatorUser: "myemail@gmail.com"
        })
        .then(res => {
            toast.success("Transaction created!")
        })
    }

    handleClick(e){
        this.setState({operationType: e.target.id}, () => {this.createTransaction()})
    }

    handleChange(e){
        this.setState({nominalAmount: e.target.value})
    }

render(){
    let {symbol, price, dateOfPrice} = this.props 
    return (
        <div className="cryptoCard">
            <div className="flexbox">
                <div className="cryptoDataHalf">
                    <p className="symbol">{symbol}</p>
                    <p className="price">ARS {price}</p>
                    <p>{dateOfPrice}</p>    
                </div>
                <div className="cryptoTransactionHalf">
                    <div>
                        <input onChange={this.handleChange} number id=""/>
                    </div>
                    <div>
                        <button id="BUY" onClick={this.handleClick}>Comprar</button>
                        <button id="SELL" onClick={this.handleClick}>Vender</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default CryptoCard