import { FC, useState, useEffect } from 'react'
import { SwipeableDrawer, Stack } from '@mui/material/'

import { Button } from 'UI'
import { useLazyGetReservationsByDateQuery } from 'store/api'
import { ReservationCalendar } from 'components/form-componets/reservation-form/reservation-calendar'
import { ReservationForm } from 'components/form-componets/reservation-form'
import { TableReservation } from './table-reservation'
import { SelectDateWrapper } from './select-date-wrapper'

interface DrawerProps {
  state: boolean
  toggleDrawer: () => void
}

const Drawer: FC<DrawerProps> = ({ state, toggleDrawer }) => {
  const [trigger, { data }] = useLazyGetReservationsByDateQuery()
  const [isShowForm, setShowForm] = useState(false)
  const handleCalendarValue = (value: string) => {
    trigger(value)
  }

  return (
    <SwipeableDrawer anchor="right" open={state} onClose={toggleDrawer} onOpen={toggleDrawer}>
      {isShowForm ? (
        <ReservationForm cancelHandleFunc={setShowForm} />
      ) : (
        <>
          <SelectDateWrapper>
            <ReservationCalendar label="Select date" name="date" onChange={handleCalendarValue} />
          </SelectDateWrapper>
          <Stack
            direction="column"
            justifyContent="space-between"
            sx={{ height: '100%', p: '33px 24px 24px' }}>
            <TableReservation data={data} />
            <Button size="default" variant="contained" onClick={() => setShowForm(true)}>
              Add new reservation
            </Button>
          </Stack>
        </>
      )}
    </SwipeableDrawer>
  )
}

export default Drawer
