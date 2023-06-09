/* eslint-disable react/no-array-index-key */
import { FC, useCallback, useMemo, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import s from './ReservationCalendar.module.scss'

interface CalendarProps {
  handleSetChosenDay: (day: Date) => void
}

export const Calendar: FC<CalendarProps> = (props) => {
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
        <div>
          <span onClick={() => setSelectedDate((date) => date.subtract(1, 'month'))}>
            leftArrow
          </span>

          <span onClick={() => setSelectedDate((date) => date.add(1, 'month'))}> rightArrow</span>
        </div>
      </div>
      <div className={s.weekDaysWrapper}>
        {generateWeeksOfTheMonth[0].map((day, index) => (
          <div className={s.weekDayCell} key={`week-day-${index}`}>
            {dayjs(day).format('dd')}
          </div>
        ))}
      </div>
      {generateWeeksOfTheMonth.map((week, weekIndex) => (
        <div className={s.calendarContentWrapper} key={`week-${weekIndex}`}>
          {week.map((day, dayIndex) => (
            <div
              className={s.calendarDayCell}
              style={{ color: colorVariant(day) }}
              key={`day-${dayIndex}`}
              onClick={() => handleSetChosenDay(day)}>
              {day.getDate()}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
