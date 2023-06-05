import { FC } from 'react'
import { Box } from '@mui/material'
import { TablesReservationMap } from './tables-reservation-map'
import { tablePlacementMap } from './ReservationCanvas.utils'

const ReservationCanvas: FC = () => {
  return (
    <Box sx={{ flex: 1, bgcolor: '#F8F9FD', p: { xs: '1% 5%', xl: '1% 12%' } }}>
      <TablesReservationMap placementMap={tablePlacementMap} />
    </Box>
  )
}

export default ReservationCanvas
