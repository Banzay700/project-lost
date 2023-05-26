import { FC } from 'react'
import { Chip } from '@mui/material'
import s from './InfoChip.module.scss'

interface InfoTagProps {
  type: 'takeAway' | 'dineIn' | 'delivery' | 'closed' | 'opened' | undefined
}

const classMap = {
  takeAway: [s.takeAway, 'Take away'],
  dineIn: [s.dineIn, 'Dine in'],
  delivery: [s.delivery, 'Delivery'],
  closed: [s.close, 'Close'],
  opened: [s.open, 'Open'],
}

const InfoChip: FC<InfoTagProps> = ({ type }) => {
  const typeCheckedLabel = type && classMap[type][1]
  const typeCheckedClassName = type && classMap[type][0]
  return <Chip label={typeCheckedLabel} className={typeCheckedClassName} />
}

export default InfoChip
