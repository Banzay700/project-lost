import { FC, useEffect } from 'react'
import { Stack } from '@mui/material'
import { useLazyGetTablesCanvasQuery } from 'store/api'
import { TablesReservationRow } from './tables-reservation-row'

const TablesReservationMap: FC = () => {
  const [trigger, { data }] = useLazyGetTablesCanvasQuery()

  useEffect(() => {
    trigger()
  }, [data]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      {data?.map(({ id, sector }) => (
        <TablesReservationRow key={id} sector={sector} />
      ))}
    </Stack>
  )
}

export default TablesReservationMap
