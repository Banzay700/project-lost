import { FC } from 'react'
import { Typography } from '@mui/material'
import { Icon } from 'assets'
import { useReservationReducer } from 'hooks/useReservationReducer.hook'
import { TableCardIcon, TableCardWrapper } from './TableCard.styled'

interface TableCardProps {
  tableNumber: string
}

const TableCard: FC<TableCardProps> = ({ tableNumber }) => {
  const { clearActiveTableStore } = useReservationReducer()

  return (
    <TableCardWrapper>
      <TableCardIcon onClick={clearActiveTableStore}>
        <Icon.CrossSmall />
      </TableCardIcon>
      <Typography variant="subtitle1" color="secondary" textAlign="center">
        {tableNumber}
      </Typography>
    </TableCardWrapper>
  )
}

export default TableCard
