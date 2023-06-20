import { FC } from 'react'
import { Button } from 'UI'
import { ReservationCalendar } from 'components/form-componets'
import { useLazyGetReservationsByDateQuery } from 'store/api'
import { SelectDateWrapper } from './select-date-wrapper'
import { TableReservation } from './table-reservation'
import { ReservationInfoWrapper } from './ReservationInfoList.styled'

interface ReservationInfoListProps {
  handleShowForm: () => void
}

const ReservationInfoList: FC<ReservationInfoListProps> = ({ handleShowForm }) => {
  const [getReservationInfo, { data }] = useLazyGetReservationsByDateQuery()
  const handleCalendarValue = (value: string) => getReservationInfo(value)

  return (
    <>
      <SelectDateWrapper>
        <ReservationCalendar label="Select date" name="date" onChange={handleCalendarValue} />
      </SelectDateWrapper>
      <ReservationInfoWrapper>
        <TableReservation data={data} />
        <Button size="medium" variant="contained" onClick={handleShowForm}>
          Add new reservation
        </Button>
      </ReservationInfoWrapper>
    </>
  )
}

export default ReservationInfoList
