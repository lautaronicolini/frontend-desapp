import '../styles/CryptoCard.css'

function CryptoCard (props) {
    return (
    <div className="cryptoCard">
        <p className="symbol">{props.symbol}</p>
        <p className="price">ARS {props.price}</p>
    </div>
    )
}

export default CryptoCard;