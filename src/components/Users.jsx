import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import { useHistory } from 'react-router-dom';


const baseURL = 'http://localhost:8080/api/users'

function Users() {

    const history = useHistory();
    const [users,setUsers]= useState([]);


    useEffect(()=>{
      const token = localStorage.getItem('SavedToken')

      if(token==null){
        history.push('/login')
      }

      else{
      const headers = {
        'Authorization': 'Bearer '+ token
      }
      
     axios.get(baseURL, { headers: headers})
          .then(res => {
            const users = res.data;
            setUsers(users);
            console.log(users)
          })
          .catch(res=>
            console.log(res)
          )}
    }, [])
    
    
    return (
    <div className="users">
        <div className="users-container">
        <h1 class="user-title">Users</h1>

            { users.map(user =>
              
              <UserCard key={user.id} user={user}/>)}
        </div>
      
    </div>
    )
  }


 export default Users;