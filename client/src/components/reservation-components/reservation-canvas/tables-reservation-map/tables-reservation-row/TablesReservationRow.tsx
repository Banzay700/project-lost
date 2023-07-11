import { FC } from 'react'
import { Stack } from '@mui/material'
import { TableType } from 'types/index'
import { Table } from './table'

interface TablesReservationRowProps {
  sector: TableType[]
}

const TablesReservationRow: FC<TablesReservationRowProps> = ({ sector }) => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      {sector.map((table) => (
        <Table key={table.number} table={table} />
      ))}
    </Stack>
  )
}

export default TablesReservationRow
