import { FC } from 'react'
import { Box } from '@mui/material'
import { TablesReservationMap } from './tables-reservation-map'

const ReservationCanvas: FC = () => {
  return (
    <Box sx={{ flex: 1, bgcolor: '#f8f9fd', p: { xs: '1% 5%', xl: '1% 12%' } }}>
      <TablesReservationMap />
    </Box>
  )
}

export default ReservationCanvas
