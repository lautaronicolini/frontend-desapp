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
                <button onClick={"/buyTransaction"}>Buy</button>
                <button onClick={"/sellTransaction"}>Sell</button>
            </div>
        </div>
    </div>
    )
}

export default CryptoCard;