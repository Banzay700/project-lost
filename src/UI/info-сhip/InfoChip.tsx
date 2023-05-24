import { FC } from 'react'
import { Chip } from '@mui/material'
import s from './InfoChip.module.scss'

interface InfoTagProps {
  type: 'away' | 'dineIn' | 'delivery' | 'closed' | 'opened'
}

const classMap = {
  away: [s.takeAway, 'Take away'],
  dineIn: [s.dineIn, 'Dine in'],
  delivery: [s.delivery, 'Delivery'],
  closed: [s.close, 'Close'],
  opened: [s.open, 'Open'],
}

const InfoChip: FC<InfoTagProps> = ({ type }) => {
  return <Chip label={classMap[type][1]} className={classMap[type][0]} />
}

export default InfoChip
