import { FC } from 'react'
import { Chip } from '@mui/material'
import s from './InfoChip.module.scss'

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

const InfoChip: FC<InfoTagProps> = ({ type }) => {
  return <Chip label={classMap[type][1]} className={classMap[type][0]} />
}

export default InfoChip
