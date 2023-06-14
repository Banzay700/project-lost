import { FC, useCallback, useMemo, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { Stack } from '@mui/material'
import { Icon } from 'assets'
import s from './Calendar.module.scss'

interface CalendarProps {
  handleSetChosenDay: (day: Date) => void
}

const Calendar: FC<CalendarProps> = (props) => {
  const { handleSetChosenDay } = props

  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs())
  const currentDay = useMemo(() => dayjs().toDate(), [])

  const colorVariant = (day: Date) =>
    selectedDate.clone().toDate().getMonth() !== day.getMonth()
      ? '#DAE1E7'
      : dayjs(currentDay).isSame(day, 'date')
      ? '#FF5C00'
      : '#1B1B2F'

  const firstDayOfTheMonth = useMemo(() => selectedDate.clone().startOf('month'), [selectedDate])

  const firstDayOfFirstWeekOfMonth = useMemo(
    () => dayjs(firstDayOfTheMonth).startOf('week'),
    [firstDayOfTheMonth],
  )

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
    <div className={s.mainWrapper}>
      <div className={s.calendarHeaderWrapper}>
        <h3>{selectedDate.clone().format('MMM YYYY')}</h3>
        <Stack direction="row" gap="12px">
          <Stack onClick={() => setSelectedDate((date) => date.subtract(1, 'month'))}>
            <Icon.Arrow style={{ rotate: '180deg', cursor: 'pointer', fill: '#FF5C00' }} />
          </Stack>

          <Stack onClick={() => setSelectedDate((date) => date.add(1, 'month'))}>
            <Icon.Arrow style={{ cursor: 'pointer', fill: '#FF5C00', marginTop: '-1px' }} />
          </Stack>
        </Stack>
      </div>
      <div className={s.weekDaysWrapper}>
        {generateWeeksOfTheMonth[0].map((day) => (
          <div className={s.weekDayCell} key={dayjs(day).format('DD/MM')}>
            {dayjs(day).format('dd')}
          </div>
        ))}
      </div>
      {generateWeeksOfTheMonth.map((week) => (
        <div className={s.calendarContentWrapper} key={week.toString()}>
          {week.map((day) => (
            <div
              className={s.calendarDayCell}
              style={{ color: colorVariant(day) }}
              key={dayjs(day).format('DD/MM')}
              onClick={() => handleSetChosenDay(day)}>
              {day.getDate()}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Calendar
