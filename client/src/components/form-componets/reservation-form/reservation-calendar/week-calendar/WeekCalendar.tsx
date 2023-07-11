import { FC } from 'react'
import { useTheme, useMediaQuery, Stack } from '@mui/material'

import { Icon } from 'assets'
import { WeekCalendarItem } from './week-calendar-item'
import { WeekCalendarWrapper } from './WeekCalendar.styled'
import { generateWeek } from './weekCalendar.utils'

interface WeekCalendarProps {
  startDay: Date
  handleSetChosenDay: (day: Date) => void
  activeIndex: number | null
  setActiveIndex: (index: number) => void
}

const WeekCalendar: FC<WeekCalendarProps> = (props) => {
  const { startDay, activeIndex, handleSetChosenDay, setActiveIndex } = props
  const { breakpoints } = useTheme()
  const isScreenLarge = useMediaQuery(breakpoints.down('lg'))
  const daysOfWeek = generateWeek(startDay, isScreenLarge)

  const handleItemClick = (index: number, day: Date) => {
    setActiveIndex(index)
    handleSetChosenDay(day)
  }

  const weekCalendarItems = daysOfWeek.map((day, i) => (
    <WeekCalendarItem
      key={`item-${day}`}
      itemDate={day}
      active={activeIndex === i}
      onClick={() => handleItemClick(i, day)}
    />
  ))

  return (
    <WeekCalendarWrapper>
      {!isScreenLarge && (
        <Stack sx={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Icon.Calendar />
        </Stack>
      )}
      {weekCalendarItems}
    </WeekCalendarWrapper>
  )
}

export default WeekCalendar
