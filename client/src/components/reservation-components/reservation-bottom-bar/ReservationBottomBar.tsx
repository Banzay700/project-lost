import { FC } from 'react'
import { Box, Stack, useTheme } from '@mui/material'

import { Button } from 'UI/index'
import { useReservationReducer } from 'hooks/index'
import { BottomBarIcon } from './bottom-bar-icon'
import { TablesIconsLine } from './tables-cards-line'
import { ReservationBarWrapper } from './ReservationBottomBar.styled'

interface ReservationBottomBarProps {
  toggleDrawer: () => void
  handleShowForm: () => void
}

const ReservationBottomBar: FC<ReservationBottomBarProps> = ({ toggleDrawer, handleShowForm }) => {
  const { palette } = useTheme()
  const { isActiveTable } = useReservationReducer()

  return (
    <Box sx={{ p: { lg: '24px', xs: '14px' }, bgcolor: palette.background.main }}>
      <ReservationBarWrapper>
        <BottomBarIcon />
        <TablesIconsLine />
        <Stack sx={{ flexDirection: 'row', gap: '10px' }}>
          <Button
            size="medium"
            variant="outlined"
            onClick={handleShowForm}
            disabled={!isActiveTable}>
            Reserve Table
          </Button>
          <Button variant="contained" size="medium" color="primary" onClick={toggleDrawer}>
            All Reservations
          </Button>
        </Stack>
      </ReservationBarWrapper>
    </Box>
  )
}

export default ReservationBottomBar
