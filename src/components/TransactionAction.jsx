import React from 'react';
import axios from 'axios';
import '../styles/Details.css';
import { browserHistory } from 'react-router';
import { Redirect } from 'react-router-dom';




export default class TransactionAction extends React.Component {

    state = { 
        role: this.props.location.state.role,
        details: {},
        receivedConfirmation: false,
        setConfirmation:false,
     }

    componentDidMount() {
        console.log("props received action:",this.props)
        this.setState({details: this.props.location.state})
        console.log("state :",this.state)

        const token = localStorage.getItem('SavedToken')
        const headers = {
            'Authorization': 'Bearer '+ token
          }
            //pide los datos de la transaccion por id
            const baseURL = `http://localhost:8080/api/transaction/details?id=${this.props.location.state.transactionId}`

            axios.get(
                baseURL, 
                { headers: headers}
            )
            .then( res=>{
                console.log("createTransaction response :",res.data)
                this.setState({details: res.data})
                console.log("state after api call :",this.state)
                if(this.state.role==='Applier'&&this.state.details.stateHistory==='NEW'){
                
                    const baseURLApply = `http://localhost:8080/api/transaction/apply?id=${this.props.location.state.transactionId}&userEmail=${localStorage.getItem("user")}`
                    axios.get(
                        baseURLApply, 
                        { headers: headers}
                    )
                    .then(res => {
                        this.setState({paymentAddress: res.data})
                        console.log("transaction applied ", res.data, " state : ",this.state )
                        window.location.reload()
                    })
                    .catch(res=>
                        console.log('')
                        )
        
                }

            }).catch(res=>
                console.log(res)
            )
        
    
    }

    handleCancellation = () => {
        const token = localStorage.getItem('SavedToken')
        const headers = {
            'Authorization': 'Bearer '+ token
          }
        console.log('handling cancellation: ', this.state)
        const baseURL = `http://localhost:8080/api/transaction/changeState?id=${this.props.location.state.transactionId}&newState=CANCELED&userUpdaterEmail=${localStorage.getItem('user')}`
        axios.post(
            baseURL, 
            { headers: headers}
        ).then(res=> {
            console.log('transaction state updated: ', this.state.details.stateHistory)
            window.location.reload()
        }).catch(res=>
            console.log("could not update state", res)
            )
    }

    handleConfirmation = () =>{        
        const token = localStorage.getItem('SavedToken')
        const headers = {
            'Authorization': 'Bearer '+ token
          }
        console.log('handling confirmation: ', this.state)
        if(this.state.details.stateHistory==='NEW'){
            const baseURLNew = `http://localhost:8080/api/transaction/changeState?id=${this.props.location.state.transactionId}&newState=APPLIED&userUpdaterEmail=${localStorage.getItem('user')}`
            axios.post(
                baseURLNew, 
                { headers: headers}
            ).then(res=> {
                console.log('transaction state updated: ', this.state.details.stateHistory)
                window.location.reload()
            }).catch(res=>
                console.log("could not update state", res)
                )
        }

        if( this.state.details.stateHistory==='APPLIED'){
            const baseURLApplied = `http://localhost:8080/api/transaction/changeState?id=${this.props.location.state.transactionId}&newState=TRANSFERENCE_DONE&userUpdaterEmail=${localStorage.getItem('user')}`
            axios.post(
                baseURLApplied, 
                { headers: headers}
            ).then(res=> {
                console.log('transaction state updated: ', this.state.details.stateHistory)
                window.location.reload()
            }).catch(res=>
                console.log("could not update state", res)
            )
        }
            if( this.state.details.stateHistory==='TRANSFERENCE_DONE'){
                const baseURLApplied = `http://localhost:8080/api/transaction/changeState?id=${this.props.location.state.transactionId}&newState=CLOSED&userUpdaterEmail=${localStorage.getItem('user')}`
                axios.post(
                    baseURLApplied, 
                    { headers: headers}
                ).then(res=> {
                    console.log('transaction state updated: ', this.state.details.stateHistory)
                    window.location.reload()
                }).catch(res=>
                    console.log("could not update state", this.state)
                )
        }
    }

 

    render() {
       
    return (
        <div className="transaction-card">
            <div>
                 {this.state.details.stateHistory===('NEW')&&<p className="transaction-status-active">Transacci??n en curso</p>}
                 {this.state.details.stateHistory===('APPLIED')&&<p className="transaction-status-active">Transacci??n en curso</p>}
                 {this.state.details.stateHistory===('TRANSFERENCE_DONE')&&<p className="transaction-status-active">Transacci??n en curso</p>}
                 {this.state.details.stateHistory==='CLOSED' &&<p className="transaction-status-finished">Transacci??n finalizada</p>}
                 {this.state.details.stateHistory==='CANCELED' &&<p className="transaction-status-cancelled">Transacci??n cancelada</p>}


            </div>
        <div className="card">

            <div class="card-header">
                <h5>{this.state.details.cryptoSymbol}</h5> 
                cantidad ofertada <b>{this.state.details.amount}</b>
            </div>
            <div class="card-body flexbox">
                <div>
                    <p>{this.state.details.time}</p>
                </div>
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col">
                            <label>Usuario</label>
                            {(this.state.details.operationType==='SELL'&&this.state.details.sellerEmail===localStorage.getItem('user'))&&                               
                            <p> {this.state.details.buyerEmail}</p>}
                            
                            {(this.state.details.operationType==='BUY'&&this.state.details.buyerEmail===localStorage.getItem('user'))&&                               
                            <p> {this.state.details.sellerEmail}</p>}
                            
                            {!((this.state.details.operationType==='SELL'&&this.state.details.sellerEmail===localStorage.getItem('user'))||
                            (this.state.details.operationType==='BUY'&&this.state.details.buyerEmail===localStorage.getItem('user')))&&                               
                            <p> {this.state.details.userName + ' ' + this.state.details.userSurname}</p>}
                        </div>
                        <div class="col">
                        <label>Cantidad nominal</label>
                            <p>{this.state.details.amount}</p>
                        </div>
                    <div class="row align-items-start">
                        <div class="col">
                            <label>Reputaci??n</label>
                            <p>{this.state.details.userReputation}</p>
                            
                        </div>
                        <div class="col">
                            <label>Cotizaci??n del Cripto Activo</label>
                            <p>{this.state.details.cryptoValue}</p>
                        </div>
                    </div>
                    <div class="row align-items-start">
                        <div class="col">
                                <label><b>Total</b></label>
                                <p><b>ARS ${this.state.details.price}</b></p>
                            </div>
                            { /*If user is Seller then show wallet address */}
                            <div class="col">
                            {this.state.details.sellerEmail===localStorage.getItem('user') &&
                                <div>
                                <label>Direcci??n de billetera</label>
                                <p>{this.state.paymentAddress}</p>
                                </div>
                            }
                            </div>
                            { /*If user is Buyer then show CVU to transfer to */}
                            <div class="col">
                            {this.state.details.buyerEmail===localStorage.getItem('user') &&
                                <div>
                                <label>CVU a transferir</label>
                                <p>{this.state.paymentAddress}</p>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-toolbar">

                        {this.state.details.buyerEmail===localStorage.getItem('user')&&
                        <button  className="btn btn-primary btn-selection" onClick={this.handleConfirmation} disabled={!(this.state.details.stateHistory==='APPLIED')}>
                            Realic?? la transferencia</button>}

                        {this.state.details.sellerEmail===localStorage.getItem('user')&&
                        <button className="btn btn-primary btn-selection" onClick={this.handleConfirmation} disabled={!(this.state.details.stateHistory==='TRANSFERENCE_DONE')}>Confirmar recepci??n</button>}
                   

                        {!(this.state.details.stateHistory==='CLOSED'||this.state.details.stateHistory==='CANCELED')&&<button className="btn btn-primary" onClick={this.handleCancellation} >Cancelar</button>}
                    </div>
            </div>
            </div>
        </div>
        )
    }
}