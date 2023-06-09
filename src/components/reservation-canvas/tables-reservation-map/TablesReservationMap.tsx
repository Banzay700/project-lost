import { FC } from 'react'
import { Stack } from '@mui/material'
import { useGetTablesCanvasQuery } from 'store/api'
import { TablesReservationRow } from './tables-reservation-row'

const TablesReservationMap: FC = () => {
  const { data } = useGetTablesCanvasQuery()

  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      {data?.map(({ id, sector }) => (
        <TablesReservationRow key={id} sector={sector} />
      ))}
    </Stack>
  )
}

export default TablesReservationMap
