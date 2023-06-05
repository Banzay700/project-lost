import { FC, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { ChairsPair } from './chairs-pair'
import { ChairLine } from './chair-line'

interface TableProps {
  tableNumber: string
  seatsQuantity: number
}

const Table: FC<TableProps> = ({ tableNumber, seatsQuantity }) => {
  const [selected, setSelected] = useState(false)
  const [reserved, setReserved] = useState(false)

  const handleSelected = () => {
    setSelected(!selected)
    setReserved(!reserved)
  }

  const tableStyles = {
    p: '22px',
    borderRadius: '16px',
    bgcolor: ' #ffffff',
    border: '2px solid',
    color: selected ? '#ff5c00' : '#e4e4e4',
    alignItems: 'center',
    cursor: 'pointer',
  }

  const tableTextStyles = {
    width: '84px',
    height: '84px',
    bgcolor: reserved ? '#fff5ee' : '#ecf6ff',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <Box onClick={handleSelected} sx={{ display: 'inlineBlock', position: 'relative' }}>
      <ChairsPair />
      <ChairLine specifiedSeatsQuantity={seatsQuantity} />
      <Stack sx={tableStyles}>
        <Stack sx={tableTextStyles}>
          <Typography color={reserved ? '#ff5c00' : '#3395f0'}>{tableNumber}</Typography>
        </Stack>
      </Stack>
      <ChairLine specifiedSeatsQuantity={seatsQuantity} />
    </Box>
  )
}

export default Table
