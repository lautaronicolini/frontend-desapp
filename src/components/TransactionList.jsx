import axios from 'axios';
import TransactionDetails from './TransactionDetails';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';



const baseURL = 'http://localhost:8080/api/transaction/all'

 function TransactionList (){

  const history = useHistory()
  const [transactions, setTransactions]= useState([])

  useEffect(()=>{
     const token =  localStorage.getItem('SavedToken')
      if(token==null){
        history.push('/login')
      }
     console.log("saved token", token)
     const headers = {
       'Authorization': 'Bearer '+ token
      }
    axios.get(baseURL, { headers: headers})
      .then(res => {
          console.log("transactions", res)
        const transactions = res.data
        setTransactions(transactions)
      })
    },[]
  )

  
    return (
    <div>
        <h3>Active transactions</h3>
        <div className="flexbox">
        { transactions.map(t => {
          if(!(t.operationType==='SELL'&&t.sellerEmail===localStorage.getItem('user')||
            t.operationType==='BUY'&&t.buyerEmail===localStorage.getItem('user')) && t.stateHistory.stateUpdates.length<2){
           return <li class="list-group-item"><TransactionDetails key={t.id} details={t} /></li>
          }
        })}
      </div>
    </div>
    )
  }


  export default TransactionList