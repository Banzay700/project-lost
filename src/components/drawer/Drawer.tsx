import { FC } from 'react'
import { SwipeableDrawer, Box, Stack } from '@mui/material/'

import { Button } from 'UI'
import { TableReservation } from './table-reservation'
import { SelectDateWrapper } from './select-date-wrapper'

interface DrawerProps {
  state: boolean
  toggleDrawer: () => void
}

const Drawer: FC<DrawerProps> = ({ state, toggleDrawer }) => {
  return (
    <SwipeableDrawer anchor="right" open={state} onClose={toggleDrawer} onOpen={toggleDrawer}>
      <SelectDateWrapper>
        <Box>Select Date</Box>
      </SelectDateWrapper>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{ height: '100%', p: '33px 24px 24px' }}>
        <TableReservation />

        <Button size="default" variant="contained">
          Add new reservation
        </Button>
      </Stack>
    </SwipeableDrawer>
  )
}

export default Drawer
