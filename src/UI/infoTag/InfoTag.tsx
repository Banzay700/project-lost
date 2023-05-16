import { FC } from 'react'
import s from './InfoTag.module.scss'

interface InfoTagProps {
  type: 'Take away' | 'Dine in' | 'Delivery' | 'Close' | 'Open'
}

const classMap = {
  'Take away': s.takeAway,
  'Dine in': s.dineIn,
  Delivery: s.delivery,
  Close: s.close,
  Open: s.open,
}

const InfoTag: FC<InfoTagProps> = ({ type }) => {
  return <div className={classMap[type]}>{type}</div>
}

export default InfoTag
