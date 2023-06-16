import { FC } from 'react'
import { Box, Typography } from '@mui/material'

import { TableType } from 'types'
import { useReservationReducer } from 'hooks/useReservationReducer.hook'
import { ChairsPair } from './chairs-pair'
import { ChairLine } from './chair-line'
import { ReservationInfo } from './reservation-info'
import { TableText, TableWrapper } from './Table.styled'

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

  return (
    <Box sx={{ display: 'inlineBlock', position: 'relative' }} onClick={handleSelected}>
      <ChairsPair />
      <ChairLine specifiedSeatsQuantity={seats} />
      <TableWrapper selected={isSelected}>
        <ReservationInfo info={reservation} />
        <TableText info={reservation}>
          <Typography color="currentColor">{number}</Typography>
        </TableText>
      </TableWrapper>
      <ChairLine specifiedSeatsQuantity={seats} />
    </Box>
  )
}

export default Table
