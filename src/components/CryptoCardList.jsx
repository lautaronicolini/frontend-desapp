import axios from 'axios';
import CryptoCard from './CryptoCard';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LoadSpinner from './LoadSpinner';

const baseURL = 'http://localhost:8080/api/crypto/prices'

 function CryptoCardList (){

  const history = useHistory()
  const [cryptos,setCryptos]= useState([])
  const [isLoading, setIsLoading] = useState(true);


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
      handleIsLoadedToggle()
      setCryptos(cryptos)
    })

  },[])


  const handleIsLoadedToggle = () => {
    setIsLoading(isLoading => !isLoading)
  };
  
    return (
    <div className='crypto-container'>
      <div className="flexbox">
        { cryptos.map(crypto => <CryptoCard key={crypto.symbol} symbol={crypto.symbol} price={crypto.price} time={crypto.dateOfPrice}/>)}
      </div>

      {isLoading &&<LoadSpinner />}

    </div>
    )
  }


  export default CryptoCardList

