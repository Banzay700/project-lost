import { FC } from 'react'
import { Typography } from '@mui/material'
import { ItemDayWrapper } from './WeekCalendar.styled'

interface WeekCalendarItemProps {
  day: string
  weekDay: string
  active: boolean
  onClick: () => void
}

export const WeekCalendarItem: FC<WeekCalendarItemProps> = (props) => {
  const { day, weekDay, active, onClick } = props
  return (
    <ItemDayWrapper onClick={onClick} active={active}>
      <Typography variant="subtitle1" color={active ? 'primary' : 'text'}>
        {weekDay}
      </Typography>
      <Typography fontWeight={600} color={active ? 'primary' : 'secondary'}>
        {day}
      </Typography>
    </ItemDayWrapper>
  )
}
