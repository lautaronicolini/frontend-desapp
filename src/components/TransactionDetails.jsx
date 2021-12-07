import React from 'react';
import axios from 'axios';
import '../styles/Details.css';
import { Redirect } from 'react-router-dom';
import TransactionAction from './TransactionAction';


export default class TransactionDetails extends React.Component {

    state = { 
        details: {},
        redirect:false,
        anyTransactions: false
    }

    componentDidMount() {
        console.log("details props",this.props)
        const token = localStorage.getItem('SavedToken')

        const headers = {
          'Authorization': 'Bearer '+ token
        }
        const baseURL = `http://localhost:8080/api/transaction/details?id=${this.props.details.id}`
        axios.get(
            baseURL, 
            { headers: headers})
          .then(res => {
            const details = res.data;
            this.setState({ details });
            this.state.details.role = 'Applier'
          })
          console.log(this.state)
      }

      handleOperation(){
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/transactionRequest',
                state: this.state.details
            }}/>
          }
             
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    render() {
       
    return (
        <div className="card">

            <div class="card-header">
                <h5>{this.state.details.cryptoSymbol}</h5> 
                cantidad ofertada <b>{this.state.details.amount}</b>
            </div>
            <div class="card-body flexbox">
                <div>
                    <p>Hora - {this.state.details.time}</p>
                </div>
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col">
                            <label>Usuario</label>
                            <p>{this.state.details.userName + ' ' + this.state.details.userSurname}</p>
                        </div>
                        <div class="col">
                        <label>Cantidad nominal del Cripto Activo</label>
                            <p>{this.state.details.amount}</p>
                        </div>
                    <div class="row align-items-start">
                        <div class="col"> <label>Reputación</label>
                            <p>{this.state.details.userReputation}</p>
                            
                        </div>
                        <div class="col">
                            <label>Cotización del Cripto Activo</label>
                            <p>{this.state.details.cryptoValue}</p>
                        </div>
                    </div>
                        <div>
                            <label><b>Total</b></label>
                            <p><b>ARS ${this.state.details.price}</b></p>
                        </div>
                        
                        </div>
                    </div>
                    <div>
                    {this.handleOperation()}
                    {this.state.details.operationType=="SELL"&&<button className="btn btn-primary" onClick={()=>this.setRedirect()}>Comprar</button>}
                    {this.state.details.operationType=="BUY"&&<button className="btn btn-primary" onClick={()=>this.setRedirect()}>Vender</button>}
                </div>
                </div>


            </div>
        )
    }
}