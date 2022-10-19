import { SalesFilters } from '../SalesFilters'
import { SalesTable } from '../SalesTable'
import './styles.css'

export function SalesCard() {
  return (
    <div className="dsmeta-card">
      <SalesFilters/>
      <SalesTable/>
    </div>
  )
}
