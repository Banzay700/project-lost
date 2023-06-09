import { FC, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { ReservationCanvasType } from 'types'
import { ChairsPair } from './chairs-pair'
import { ChairLine } from './chair-line'
import { IconInfo } from 'assets/icons'

interface TableProps {
  tableNumber: string
  seats: number
  reservation?: ReservationCanvasType
}

const Table: FC<TableProps> = ({ tableNumber, seats, reservation }) => {
  const [selected, setSelected] = useState(false)

  const handleSelected = () => {
    setSelected(!selected)
    console.log(reservation)
  }

  const tableStyles = {
    p: '22px',
    borderRadius: '16px',
    bgcolor: ' #ffffff',
    border: '2px solid',
    color: selected ? '#ff5c00' : '#e4e4e4',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
  }

  const tableTextStyles = {
    width: { xs: '64px', lg: '84px' },
    height: { xs: '64px', lg: '84px' },
    color: reservation ? '#ff5c00' : '#e4e4e4',
    bgcolor: reservation ? '#fff5ee' : '#ecf6ff',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <Box onClick={handleSelected} sx={{ display: 'inlineBlock', position: 'relative' }}>
      <ChairsPair />
      <ChairLine specifiedSeatsQuantity={seats} />
      <Stack sx={tableStyles}>
        {reservation && <IconInfo style={{ position: 'absolute', top: '5px', right: '8px' }} />}
        <Stack sx={tableTextStyles}>
          <Typography color={reservation ? '#ff5c00' : '#3395f0'}>{tableNumber}</Typography>
        </Stack>
      </Stack>
      <ChairLine specifiedSeatsQuantity={seats} />
    </Box>
  )
}

export default Table
