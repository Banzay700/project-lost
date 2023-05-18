import { FC } from 'react'
import s from './InfoTag.module.scss'

interface InfoTagProps {
  type: 'away' | 'dineIn' | 'delivery' | 'close' | 'open'
}

const classMap = {
  away: [s.takeAway, 'Take away'],
  dineIn: [s.dineIn, 'Dine in'],
  delivery: [s.delivery, 'Delivery'],
  close: [s.close, 'Close'],
  open: [s.open, 'Open'],
}

const InfoTag: FC<InfoTagProps> = ({ type }) => {
  return <div className={classMap[type][0]}>{classMap[type][1]}</div>
}

export default InfoTag
