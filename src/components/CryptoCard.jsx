import '../styles/CryptoCard.css'
import axios from 'axios'
import {toast, ToastContainer} from "react-toastify";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const baseURL = 'http://localhost:8080/api/transaction/create'


function CryptoCard(props){    

    let history = useHistory()

    let {symbol, price, dateOfPrice} = props 

    const [operationType, setOpType]= useState("NONE")
    const [nominalAmount, setNomAmount]= useState(0)
    
    
    function createTransaction(){
        const token = localStorage.getItem('SavedToken')

      const headers = {
        'Authorization': 'Bearer '+ token
      }
        console.log(operationType)
        axios.post(baseURL, {
            crypto: props.symbol,
            operationType: operationType,
            nominalAmount: nominalAmount,
            unitPriceARS: props.price,
            creatorUser: localStorage.getItem('user')
        }, 
        { headers: headers})
        .then(res => {
            console.log(res.data)
            toast.success("transaction created")
            history.push('sellTransaction',{details: res.data})
        }).catch(res=>{
            toast.error("the transaction could not be created")
        })
    }

    function handleClick(e){
        setOpType(e.target.id)
         createTransaction()
    }


    function handleChange(e){
        setNomAmount( e.target.value)
    }

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
                        <input onChange={handleChange} number id=""/>
                    </div>
                    <div>
                        <button id="BUY" onClick={handleClick}>Comprar</button>
                        <button id="SELL" onClick={handleClick}>Vender</button>
                    </div>
                </div>
            </div>
            <ToastContainer
                    position="top-right"
                    hideProgressBar={true}
                    />
        </div>
        )
    
}

export default CryptoCard