import { FC } from 'react'
import { Stack } from '@mui/material'

import { useReservationReducer } from 'hooks/index'
import { TableCard } from './table-card'

const TablesCardsLine: FC = () => {
  const { activeTable } = useReservationReducer()

  return (
    <Stack sx={{ p: '0 15px', flexDirection: 'row', flex: 1, gap: '16px' }}>
      {activeTable.number && <TableCard tableNumber={activeTable?.number} />}
    </Stack>
  )
}

export default TablesCardsLine
