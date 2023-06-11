import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { TableType } from 'types'
import { useReservationReducer } from 'hooks/useReservationReducer.hook'
import { ChairsPair } from './chairs-pair'
import { ChairLine } from './chair-line'
import { ReservationInfo } from './reservation-info'

interface TableProps {
  table: TableType
}

const Table: FC<TableProps> = ({ table }) => {
  const { number, seats, reservation } = table
  const { activeTable, addTableToStore } = useReservationReducer()
  const isSelected = table.number === activeTable.number

  const handleSelected = () => {
    addTableToStore(table)
  }

  const tableStyles = {
    p: '22px',
    borderRadius: '16px',
    bgcolor: ' #ffffff',
    border: '2px solid',
    color: isSelected ? '#ff5c00' : '#e4e4e4',
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
    <Box sx={{ display: 'inlineBlock', position: 'relative' }} onClick={handleSelected}>
      <ChairsPair />
      <ChairLine specifiedSeatsQuantity={seats} />
      <Stack sx={tableStyles}>
        <ReservationInfo info={reservation} />
        <Stack sx={tableTextStyles}>
          <Typography color={reservation ? '#ff5c00' : '#3395f0'}>{number}</Typography>
        </Stack>
      </Stack>
      <ChairLine specifiedSeatsQuantity={seats} />
    </Box>
  )
}

export default Table
