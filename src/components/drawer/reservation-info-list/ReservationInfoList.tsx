import { FC } from 'react'
import { Button } from 'UI'
import { useReservationReducer } from 'hooks'
import { ReservationCalendar } from 'components/form-componets'
import { useLazyGetReservationsByDateQuery } from 'store/api'
import { SelectDateWrapper } from './select-date-wrapper'
import { TableReservation } from './table-reservation'
import { ListWrapper, ReservationInfoWrapper } from './ReservationInfoList.styled'

interface ReservationInfoListProps {
  handleShowForm: () => void
}

const ReservationInfoList: FC<ReservationInfoListProps> = ({ handleShowForm }) => {
  const [getReservationInfo, { data }] = useLazyGetReservationsByDateQuery()
  const handleCalendarValue = (value: string) => getReservationInfo(value)
  const { isActiveTable } = useReservationReducer()

  return (
    <ListWrapper>
      <SelectDateWrapper>
        <ReservationCalendar label="Select date" name="date" onChange={handleCalendarValue} />
      </SelectDateWrapper>
      <ReservationInfoWrapper>
        <TableReservation data={data} />
        <Button
          size="medium"
          variant="contained"
          onClick={handleShowForm}
          disabled={!isActiveTable}>
          Add new reservation
        </Button>
      </ReservationInfoWrapper>
    </ListWrapper>
  )
}

export default ReservationInfoList
