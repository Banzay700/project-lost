import { FC } from 'react'
import { Box } from '@mui/material'
import { calculateSeatsQuantity } from './ChairLine.utils'
import s from './ChairLine.module.scss'

interface ChairLineProps {
  specifiedSeatsQuantity: number
}

const ChairLine: FC<ChairLineProps> = ({ specifiedSeatsQuantity }) => {
  const seatsQuantity = calculateSeatsQuantity(specifiedSeatsQuantity)
  const chairItems = Array.from({ length: seatsQuantity }, (_, i) => (
    <Box className={s.chairItem} key={i} />
  ))

  return (
    <Box className={s.chairLine}>
      <Box className={s.empty} />
      {chairItems}
      <Box className={s.empty} />
    </Box>
  )
}

export default ChairLine
