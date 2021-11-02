import '../styles/CryptoCard.css'

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
                <button>Comprar</button>
                <button>Vender</button>
            </div>
        </div>
    </div>
    )
}

export default CryptoCard;