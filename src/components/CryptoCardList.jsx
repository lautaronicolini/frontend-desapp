import axios from 'axios';
import CryptoCard from './CryptoCard';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const baseURL = 'http://localhost:8080/api/crypto/prices'

 function CryptoCardList (){

  const history = useHistory()
  const [cryptos,setCryptos]= useState([])

  useEffect(()=>{
     const token =  localStorage.getItem('SavedToken')
      if(token==null){
        history.push('/login')
      }
     console.log("saved token", token)
     const headers = {
       'Authorization': 'Bearer '+ token,
       'Content-Type': 'application/json'
      }
    axios.get(baseURL, { headers: headers})
      .then(res => {
        const cryptos = res.data
        setCryptos(cryptos)
      })
    },[]
  )

  
    return (
    <div>
      <div className="flexbox">
        { cryptos.map(crypto => <CryptoCard symbol={crypto.symbol} price={crypto.price} dateOfPrice={crypto.dateOfPrice}/>)}
      </div>
    </div>
    )
  }


  export default CryptoCardList

