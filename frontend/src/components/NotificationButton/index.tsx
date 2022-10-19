import './styles.css'
import notificationImg from '../../assets/img/notification.svg'

export function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={notificationImg} alt=" botão de notificar" />
    </div>
  )
}
