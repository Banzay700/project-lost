import { FC } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { Stack, useTheme, useMediaQuery } from '@mui/material'
import { Icon } from 'assets'
import { WeekCalendarItem } from './WeekCalendarItem'

interface WeekCalendarProps {
  startDay: Date
  maxDaysInWeek: number
  handleSetChosenDay: (day: Date) => void
  activeIndex: number | null
  setActiveIndex: (index: number) => void
}

const generateWeek = (day: Dayjs, maxDaysInWeek: number): Date[] => {
  const dates: Date[] = []
  for (let i = 0; i < maxDaysInWeek; i++) {
    const date = day.clone().add(i, 'day').toDate()
    dates.push(date)
  }
  return dates
}

const WeekCalendar: FC<WeekCalendarProps> = (props) => {
  const { handleSetChosenDay, startDay, activeIndex, setActiveIndex, maxDaysInWeek } = props

  const handleItemClicked = (index: number, day: Date) => {
    setActiveIndex(index)
    handleSetChosenDay(day)
  }

  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'))

  const week = () => {
    return generateWeek(dayjs(startDay), maxDaysInWeek).map((item, i) => {
      const day = dayjs(item).format('DD')
      const weekDay = dayjs(item).format('ddd')

      return (
        <WeekCalendarItem
          key={day}
          weekDay={weekDay}
          day={day}
          active={activeIndex === i}
          onClick={() => handleItemClicked(i, item)}
        />
      )
    })
  }

  return (
    <Stack direction="row" justifyContent="center" sx={{ gap: '12px', maxWidth: '95%' }}>
      <Stack sx={{ flexDirection: 'row', border: '1px solid #E4E4E4', borderRadius: '16px' }}>
        {matchesMD && (
          <Stack
            sx={{
              width: '64px',
              height: '64px',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'transparent',
            }}>
            <Icon.Calendar />
          </Stack>
        )}
        {week()}
      </Stack>
    </Stack>
  )
}

export default WeekCalendar
