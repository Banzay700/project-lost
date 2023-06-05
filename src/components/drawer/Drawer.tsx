import { FC, useState } from 'react'
import { SwipeableDrawer, Box, Stack } from '@mui/material/'

import { Button } from 'UI'
import { TableReservation } from './table-reservation'
import { SelectDateWrapper } from './select-date-wrapper'

const Drawer: FC = () => {
  const [state, setState] = useState(false)

  const toggleDrawer = (open: boolean) => () => setState(open)

  return (
    <>
      <Button onClick={toggleDrawer(true)} size="small" variant="contained">
        right
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
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
    </>
  )
}

export default Drawer
