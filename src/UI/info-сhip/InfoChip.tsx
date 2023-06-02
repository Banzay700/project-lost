import { FC } from 'react'
import { Chip } from '@mui/material'
import { spacesBetweenCapitalsLetters } from 'utils'
import s from './InfoChip.module.scss'

interface InfoTagProps {
  type: string | undefined
}

const InfoChip: FC<InfoTagProps> = ({ type }) => {
  const label = spacesBetweenCapitalsLetters(type)
  return <Chip label={label} className={type && s[type]} />
}

export default InfoChip
