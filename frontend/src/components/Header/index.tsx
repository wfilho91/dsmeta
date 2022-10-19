import './styles.css'
import logoImg from '../../assets/img/dsmeta-logo.svg'

export function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <div className="dsmeta-logo-container">
          <img src={logoImg} alt="logo do dsmeta" />
          <h1>DSMeta</h1>
          <p>Desenvolvido por @devsuperior.ig</p>
        </div>
      </div>
    </header>
  )
}
