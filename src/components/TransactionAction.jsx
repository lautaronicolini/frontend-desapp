import React from 'react';
import axios from 'axios';
import '../styles/Details.css'


export default class TransactionAction extends React.Component {

    state = { 
        details: {},
        paymentAddress:'',
        receivedConfirmation: false,
        setConfirmation:false
     }

    componentDidMount() {
        console.log("transactionAction props ",this.props.location.state)
        this.setState({details: this.props.location.state})

        const token = localStorage.getItem('SavedToken')

        const headers = {
          'Authorization': 'Bearer '+ token
        }
        const baseURL = `http://localhost:8080/api/transaction/apply?id=${this.props.location.state.transactionId}&userEmail=${localStorage.getItem("user")}`
        axios.get(
            baseURL, 
            { headers: headers})
          .then(res => {
              this.setState({paymentAddress : res.data})
            console.log("transaction applied ", res.data)
          })
      }

      handleConfirmation(){

    }

    render() {
       
    return (
        <div>
            Transacción en curso
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
                        <div class="col">
                            <label>Reputación</label>
                            <p>{this.state.details.userReputation}</p>
                            
                        </div>
                        <div class="col">
                            <label>Cotización del Cripto Activo</label>
                            <p>{this.state.details.cryptoValue}</p>
                        </div>
                    </div>
                    <div class="row align-items-start">
                        <div class="col">
                                <label><b>Total</b></label>
                                <p><b>ARS ${this.state.details.price}</b></p>
                            </div>
                            { /*If operation is Sell then show CVU to the buyer */}
                            <div class="col">
                            {this.state.details.operationType==="SELL"&&
                            <div>
                                <label>CVU a transferir</label>
                                <p>{this.state.paymentAddress}</p>
                                </div>}
                            </div>
                            { /*If operation is Buy then show Wallet Address to the seller */}
                            <div class="col">
                            {this.state.details.operationType==="BUY"&&
                            <div>
                                <label>Dirección de billetera</label>
                                <p>{this.state.paymentAddress}</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-toolbar">

                        {this.state.details.operationType=="SELL"&&<button  className="btn btn-primary btn-selection" onClick={this.handleConfirmation("SELL")}>Realicé la transferencia</button>}
                        {this.state.details.operationType=="BUY"&&<button className="btn btn-primary btn-selection" onClick={this.handleConfirmation("BUY")}>Confirmar recepción</button>}                    

                        <button className="btn btn-primary" onClick={this.handleConfirmation("CANCEL")}>Cancelar</button>
                    </div>
            </div>
            </div>
        </div>
        )
    }
}