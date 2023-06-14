import { FC } from 'react'
import { Chip } from '@mui/material'
import { spacesBetweenCapitalsLetters } from 'utils'
import s from './InfoChip.module.scss'

interface InfoTagProps {
  type?:
    | 'dineIn'
    | 'takeAway'
    | 'delivery'
    | 'opened'
    | 'closed'
    | 'admin'
    | 'waiter'
    | 'courier'
    | 'active'
    | 'inactive'
    | 'cancelled'
    | 'done'
}

const InfoChip: FC<InfoTagProps> = ({ type }) => {
  const label = spacesBetweenCapitalsLetters(type)
  return <Chip label={label} className={type && s[type]} />
}

export default InfoChip
