import { FC, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { Stack } from '@mui/material'
import { IconCalendar } from 'assets/icons'
import { WeekCalendarItem } from './WeekCalendarItem'

interface WeekCalendarProps {
  startDay: Date
  handleSetChosenDay: (day: Date) => void
  activeIndex: number | null
  setActiveIndex: (s: number) => void
}

const generateWeek = (day: Dayjs): Date[] => {
  const dates: Date[] = []
  for (let i = 0; i < 7; i++) {
    const date = day.clone().add(i, 'day').toDate()
    dates.push(date)
  }
  return dates
}

const WeekCalendar: FC<WeekCalendarProps> = (props) => {
  const { handleSetChosenDay, startDay, activeIndex, setActiveIndex } = props

  const handleItemClicked = (index: number, day: Date) => {
    setActiveIndex(index)
    handleSetChosenDay(day)
  }

  const week = () => {
    return generateWeek(dayjs(startDay)).map((item, i) => {
      const day = dayjs(item).format('DD')
      const weekDay = dayjs(item).format('ddd')

      return (
        <WeekCalendarItem
          // eslint-disable-next-line react/no-array-index-key
          key={`d${i}`}
          weekDay={weekDay}
          day={day}
          active={activeIndex === i}
          onClick={() => handleItemClicked(i, item)}
        />
      )
    })
  }

  return (
    <Stack direction="row" justifyContent="center" sx={{ gap: '12px' }}>
      <Stack sx={{ flexDirection: 'row', border: '1px solid #E4E4E4', borderRadius: '16px' }}>
        <Stack
          sx={{
            width: '64px',
            height: '64px',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'transparent',
          }}>
          <IconCalendar />
        </Stack>
        {week()}
      </Stack>
    </Stack>
  )
}

export default WeekCalendar
