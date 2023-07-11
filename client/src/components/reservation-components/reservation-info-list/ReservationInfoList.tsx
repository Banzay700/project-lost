import { FC } from 'react'
import { ReservationCalendar } from 'components/form-componets'
import { useLazyGetReservationsByDateQuery } from 'store/api'
import { SelectDateWrapper } from './select-date-wrapper'
import { TableReservation } from './table-reservation'
import { ListWrapper, ReservationInfoWrapper } from './ReservationInfoList.styled'

const ReservationInfoList: FC = () => {
  const [getReservationInfo, { data }] = useLazyGetReservationsByDateQuery()
  const handleCalendarValue = (value: string) => getReservationInfo(value)

  return (
    <ListWrapper>
      <SelectDateWrapper>
        <ReservationCalendar label="Select date" name="date" onChange={handleCalendarValue} />
      </SelectDateWrapper>
      <ReservationInfoWrapper>
        <TableReservation data={data} />
      </ReservationInfoWrapper>
    </ListWrapper>
  )
}

export default ReservationInfoList
