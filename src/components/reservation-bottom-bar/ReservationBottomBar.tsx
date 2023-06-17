import { FC } from 'react'
import { Box, useTheme } from '@mui/material'

import { Button } from 'UI'
import { BottomBarIcon } from './bottom-bar-icon'
import { TablesIconsLine } from './tables-cards-line'
import { ReservationBarWrapper } from './ReservationBottomBar.styled'

interface ReservationBottomBarProps {
  toggleDrawer: () => void
}

const ReservationBottomBar: FC<ReservationBottomBarProps> = ({ toggleDrawer }) => {
  const { palette } = useTheme()
  return (
    <Box sx={{ p: { lg: '24px', xs: '14px' }, bgcolor: palette.background.main }}>
      <ReservationBarWrapper>
        <BottomBarIcon />
        <TablesIconsLine />
        <Button variant="contained" size="medium" color="primary" onClick={toggleDrawer}>
          Add Reservation
        </Button>
      </ReservationBarWrapper>
    </Box>
  )
}

export default ReservationBottomBar
