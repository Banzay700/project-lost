import { FC } from 'react'
import { Stack } from '@mui/material'
import { TableType } from 'types'
import { Table } from './table'

interface TablesReservationRowProps {
  sector: TableType[]
}

const TablesReservationRow: FC<TablesReservationRowProps> = ({ sector }) => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      {sector.map(({ number, seats, reservation }) => (
        <Table key={number} tableNumber={number} seats={seats} reservation={reservation} />
      ))}
    </Stack>
  )
}

export default TablesReservationRow
