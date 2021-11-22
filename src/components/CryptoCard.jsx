import '../styles/CryptoCard.css'
import { useHistory } from 'react-router-dom';


redirectTo()

function CryptoCard (props) {
    return (
    <div className="cryptoCard">
        <div className="flexbox">
            <div>
                <p className="symbol">{props.symbol}</p>
                <p className="price">ARS {props.price}</p>
                <p>{props.dateOfPrice}</p>    
            </div>
            <div>
                <button onClick={history.push("/buyTransaction")}>Buy</button>
                <button onClick={history.push("/sellTransaction")}>Sell</button>
            </div>
        </div>
    </div>
    )
}

export default CryptoCard;