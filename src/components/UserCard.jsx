import '../styles/UserCard.css'
import { useTranslation, Trans } from 'react-i18next';

function UserCard (props) {
  const { t, i18n } = useTranslation()
    return (
    <div className="userCard">
        <p className="name"></p>
        <div class="card bg-light mb-3 w-75">
  <div class="card-body">
    <h5 class="card-title">{props.user.name} {props.user.lastName}</h5>
    <p class="card-text"><Trans i18nKey="users.reputation">Reputation</Trans> {props.user.reputation}</p>
    <p class="card-text"> {props.user.email}</p>
    <p class="card-text"><Trans i18nKey="users.cvu">CVU Number</Trans> {props.user.cvu}</p>
    <p class="card-text"><Trans i18nKey="users.wallet">Wallet Address</Trans> {props.user.walletAddress}</p>
  </div>
</div>

    </div>
    )
}

export default UserCard;