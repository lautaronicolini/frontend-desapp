import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import  Navbar  from './Navbar';

const baseURL = 'http://localhost:8080/api/users'

class Users extends React.Component{
    state = { users: [] }

    componentDidMount() {
        axios.get(baseURL)
          .then(res => {
            const users = res.data;
            this.setState({ users });
            console.log(users)
          })
      }
    
render (){
    return (
    <div className="users">
        <Navbar/>
        <div className="users-container">
        <h1 class="user-title">Users</h1>

            { this.state.users.map(user =>
              
              <UserCard key={user.id} user={user}/>)}
        </div>
      
    </div>
    )
  }
}

 export default Users;