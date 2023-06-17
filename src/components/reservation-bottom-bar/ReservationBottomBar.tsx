import { FC } from 'react'

import { Box, Stack } from '@mui/material'
import { Button } from 'UI/index'
import { BottomBarIcon } from './bottom-bar-icon'
import { TablesIconsLine } from './tables-cards-line'

interface ReservationBottomBarProps {
  toggleDrawer: () => void
}

const ReservationBottomBar: FC<ReservationBottomBarProps> = ({ toggleDrawer }) => {
  const activeLineStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bgcolor: '#fff',
    p: '18px',
    borderRadius: '16px',
    boxShadow: '0px 16px 30px -6px rgba(25, 25, 28, 0.16)',
  }

  return (
    <Box sx={{ p: '24px', bgcolor: '#F8F9FD' }}>
      <Stack sx={activeLineStyle}>
        <BottomBarIcon />
        <TablesIconsLine />
        <Button variant="contained" size="medium" color="primary" onClick={toggleDrawer}>
          Add Reservation
        </Button>
      </Stack>
    </Box>
  )
}

export default ReservationBottomBar
