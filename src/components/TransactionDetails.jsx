import React from 'react';
import axios from 'axios';
import '../styles/Details.css'

const baseURL = 'http://localhost:8080/criptoP2P_API/transaction/details?id=1'

export default class TransactionDetails extends React.Component {

    state = { details: {} }

    componentDidMount() {
        axios.get(baseURL)
          .then(res => {
            const details = res.data;
            this.setState({ details });
          })
          console.log(this.state)
      }

    render() {
    return (
        <div className="details">
                <div>
                    <label>Hora</label>
                    <p>{this.state.details.time}</p>
                </div>
                <div>
                    <label>Criptoactivo</label>
                    <p>{this.state.details.cryptoSymbol}</p>
                </div>
                <div>
                    <label>Cantidad nominal del Cripto Activo</label>
                    <p>{this.state.details.amount}</p>
                </div>
                <div>
                    <label>Cotización del Cripto Activo</label>
                    <p>{this.state.details.cryptoValue}</p>
                </div>
                <div>
                    <label>Monto de la operación</label>
                    <p>ARS {this.state.details.price}</p>
                </div>
                <div>
                    <label>Usuario</label>
                    <p>{this.state.details.userName + ' ' + this.state.details.userSurname}</p>
                </div>
                <div>
                    <label>Reputación</label>
                    <p>{this.state.details.userReputation}</p>
                </div>
                <div>
                    <button>Realicé la transferencia</button>
                </div>
            </div>
        )
    }
}