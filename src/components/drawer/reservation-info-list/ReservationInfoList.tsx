import { FC } from 'react'
import { Stack } from '@mui/material'
import { ReservationCalendar } from 'components/form-componets'
import { Button } from 'UI'
import { useLazyGetReservationsByDateQuery } from 'store/api'
import { SelectDateWrapper } from './select-date-wrapper'
import { TableReservation } from './table-reservation'

interface ReservationInfoListProps {
  handleShowForm: () => void
}

const ReservationInfoList: FC<ReservationInfoListProps> = ({ handleShowForm }) => {
  const [trigger, { data }] = useLazyGetReservationsByDateQuery()

  const handleCalendarValue = (value: string) => {
    trigger(value)
  }

  return (
    <>
      <SelectDateWrapper>
        <ReservationCalendar label="Select date" name="date" onChange={handleCalendarValue} />
      </SelectDateWrapper>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{ height: '100%', p: '33px 24px 24px' }}>
        <TableReservation data={data} />
        <Button size="default" variant="contained" onClick={handleShowForm}>
          Add new reservation
        </Button>
      </Stack>
    </>
  )
}

export default ReservationInfoList
