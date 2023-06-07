import { FC } from 'react'
import { Box } from '@mui/material'
import { calculateSeatsQuantity } from './ChairLine.utils'

interface ChairLineProps {
  specifiedSeatsQuantity: number
}

const ChairLine: FC<ChairLineProps> = ({ specifiedSeatsQuantity }) => {
  const seatsQuantity = calculateSeatsQuantity(specifiedSeatsQuantity)

  const chairStyles = {
    bgcolor: '#ffffff',
    borderRadius: '30px',
    minWidth: { xs: '39px', lg: '50px' },
    minHeight: { xs: '12px', lg: '14px' },
    border: '1px solid #e4e4e4',
  }

  const chairLineStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    padding: '6px',
  }

  const emptyLineStyles = { bgcolor: '#ffffff', width: { xs: '3px', lg: '5px' } }

  const chairItems = Array.from({ length: seatsQuantity }, (_, i) => (
    <Box sx={chairStyles} key={i} />
  ))

  return (
    <Box sx={chairLineStyles}>
      <Box sx={emptyLineStyles} />
      {chairItems}
      <Box sx={emptyLineStyles} />
    </Box>
  )
}

export default ChairLine
