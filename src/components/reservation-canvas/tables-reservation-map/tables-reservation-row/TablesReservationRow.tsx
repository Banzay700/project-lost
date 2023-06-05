import { FC, ReactNode } from 'react'
import { Stack } from '@mui/material'

interface TablesReservationRowProps {
  children: ReactNode
}

const TablesReservationRow: FC<TablesReservationRowProps> = ({ children }) => {
  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      {children}
    </Stack>
  )
}

export default TablesReservationRow
