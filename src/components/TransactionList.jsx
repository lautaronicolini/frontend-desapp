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
        <ul class="list-group list-group-flush">
        { transactions.map(t => <li class="list-group-item"><TransactionDetails key={t.id} details={t} /></li>)}
      </ul>
    </div>
    )
  }


  export default TransactionList