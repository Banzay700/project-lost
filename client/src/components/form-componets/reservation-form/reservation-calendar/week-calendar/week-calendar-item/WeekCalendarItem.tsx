import { FC } from 'react'
import dayjs from 'dayjs'
import { Typography } from '@mui/material'

import { WeekCalendarItemWrapper } from './WeekCalendarItem.styled'

interface WeekCalendarItemProps {
  itemDate: Date
  active: boolean
  onClick: () => void
}

const WeekCalendarItem: FC<WeekCalendarItemProps> = ({ itemDate, active, onClick }) => {
  const day = dayjs(itemDate).format('DD')
  const weekDay = dayjs(itemDate).format('ddd')

  return (
    <WeekCalendarItemWrapper onClick={onClick} active={active}>
      <Typography variant="subtitle1" color={active ? 'primary' : 'text'}>
        {weekDay}
      </Typography>
      <Typography variant="h2" fontWeight={600} color={active ? 'primary' : 'secondary'}>
        {day}
      </Typography>
    </WeekCalendarItemWrapper>
  )
}

export default WeekCalendarItem
