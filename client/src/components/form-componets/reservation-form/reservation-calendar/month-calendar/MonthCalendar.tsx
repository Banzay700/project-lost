import { FC, useCallback, useMemo, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { Stack } from '@mui/material'
import {
  CalendarHeaderWrapper,
  MainWrapper,
  LeftArrow,
  RightArrow,
  WeekDaysWrapper,
  WeekDayCell,
  CalendarContentWrapper,
  CalendarDayCell,
} from './MonthCalendar.styled'

interface CalendarProps {
  handleSetChosenDay: (day: Date) => void
}

const MonthCalendar: FC<CalendarProps> = ({ handleSetChosenDay }) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs())
  const currentDay = useMemo(() => dayjs().toDate(), [])
  const firstDayOfTheMonth = useMemo(() => selectedDate.clone().startOf('month'), [selectedDate])
  const firstDayOfFirstWeekOfMonth = useMemo(
    () => dayjs(firstDayOfTheMonth).startOf('week'),
    [firstDayOfTheMonth],
  )

  const colorVariant = (day: Date) =>
    selectedDate.clone().toDate().getMonth() !== day.getMonth()
      ? '#DAE1E7'
      : dayjs(currentDay).isSame(day, 'date')
      ? '#FF5C00'
      : '#1B1B2F'

  const generateFirstDayOfEachWeek = useCallback((day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [day]
    for (let i = 1; i < 6; i++) {
      const date = day.clone().add(i, 'week')
      dates.push(date)
    }
    return dates
  }, [])

  const generateWeek = useCallback((day: Dayjs): Date[] => {
    const dates: Date[] = []
    for (let i = 0; i < 7; i++) {
      const date = day.clone().add(i, 'day').toDate()
      dates.push(date)
    }
    return dates
  }, [])

  const generateWeeksOfTheMonth = useMemo((): Date[][] => {
    const firstDayOfEachWeek = generateFirstDayOfEachWeek(firstDayOfFirstWeekOfMonth)
    return firstDayOfEachWeek.map((date) => generateWeek(date))
  }, [generateFirstDayOfEachWeek, firstDayOfFirstWeekOfMonth, generateWeek])

  return (
    <MainWrapper>
      <CalendarHeaderWrapper>
        <h3>{selectedDate.clone().format('MMM YYYY')}</h3>
        <Stack direction="row" gap="12px">
          <Stack onClick={() => setSelectedDate((date) => date.subtract(1, 'month'))}>
            <LeftArrow />
          </Stack>
          <Stack onClick={() => setSelectedDate((date) => date.add(1, 'month'))}>
            <RightArrow />
          </Stack>
        </Stack>
      </CalendarHeaderWrapper>
      <WeekDaysWrapper>
        {generateWeeksOfTheMonth[0].map((day) => (
          <WeekDayCell key={dayjs(day).format('DD/MM')}>{dayjs(day).format('dd')}</WeekDayCell>
        ))}
      </WeekDaysWrapper>
      {generateWeeksOfTheMonth.map((week) => (
        <CalendarContentWrapper key={week.toString()}>
          {week.map((day) => (
            <CalendarDayCell
              style={{ color: colorVariant(day) }}
              key={dayjs(day).format('DD/MM')}
              onClick={() => handleSetChosenDay(day)}>
              {day.getDate()}
            </CalendarDayCell>
          ))}
        </CalendarContentWrapper>
      ))}
    </MainWrapper>
  )
}

export default MonthCalendar
