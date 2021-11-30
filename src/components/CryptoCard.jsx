import '../styles/CryptoCard.css'
import axios from 'axios'
import {toast, ToastContainer} from "react-toastify";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const baseURL = 'http://localhost:8080/api/transaction/create'


function CryptoCard(props){    
    const { t, i18n } = useTranslation();

    let history = useHistory()

    let {symbol, price, dateOfPrice} = props 

    const [nominalAmount, setNomAmount]= useState(0)    
    
    
    function createTransaction(id){
        
        const token = localStorage.getItem('SavedToken')

      const headers = {
        'Authorization': 'Bearer '+ token
      }
        console.log("opType before createTransktn: ",id)
        axios.post(baseURL, {
            crypto: props.symbol,
            operationType: id,
            nominalAmount: nominalAmount,
            unitPriceARS: props.price,
            creatorUser: localStorage.getItem('user')
        }, 
        { headers: headers})
        .then(res => {
            console.log(res.data)
            toast.success("the transaction was created")

            
           history.push('/transactionRequest',{transactionId:res.data, operationType:id, role:'Creator', amount:nominalAmount, price:props.price, cryptoSymbol:props.symbol})
        }).catch(res=>{
            toast.error("the transaction could not be created")
        })
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
                        <input onChange={handleChange} type="number" id=""/>
                    </div>
                    <div>
                        <button id="BUY" onClick={()=>createTransaction("BUY")}>{t("transaction.create.buy")}</button>
                        <button id="SELL" onClick={()=>createTransaction("SELL")}>{t("transaction.create.sell")}</button>
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