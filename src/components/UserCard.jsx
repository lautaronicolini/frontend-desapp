import '../styles/UserCard.css'

function UserCard (props) {
    return (
    <div className="userCard">
        <p className="name"></p>
        <div class="card bg-light mb-3 w-75">
  <div class="card-body">
    <h5 class="card-title">{props.user.name} {props.user.lastName}</h5>
    <p class="card-text">Reputation {props.user.reputation}</p>
    <p class="card-text"> {props.user.email}</p>
    <p class="card-text">CVU Number {props.user.cvu}</p>
    <p class="card-text">Wallet Address {props.user.walletAddress}</p>
    <a href="#" class="btn btn-primary">Trade</a>
  </div>
</div>

    </div>
    )
}

export default UserCard;