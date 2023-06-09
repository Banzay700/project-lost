/* eslint-disable import/no-extraneous-dependencies */
import { FC, useState, useEffect } from 'react'
import { Typography, Stack } from '@mui/material'
import dayjs from 'dayjs'
import { SetFormValues } from '../ReservationForm.utils'
import { Calendar } from './Calendar'
import { WeekCalendar } from './WeekCalendar'
import s from './ReservationCalendar.module.scss'

interface ReservationCalendarProps {
  label: string
  handleSetFormValues: (fieldName: string, value: SetFormValues) => void
}

const ReservationCalendar: FC<ReservationCalendarProps> = (props) => {
  const [chosenDay, setChosenDay] = useState<Date>(new Date())
  const [isShowCalendar, setShowCalendar] = useState(false)

  const { label, handleSetFormValues } = props

  const handleSetChosenDay = (day: Date) => {
    setChosenDay(day)
    setShowCalendar(false)
  }

  useEffect(() => {
    handleSetFormValues('date', chosenDay)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenDay])

  return (
    <>
      <Stack justifyContent="space-between" direction="row">
        <Typography variant="h3" component="span">
          {label}
        </Typography>
        <Typography
          variant="h3"
          component="span"
          onClick={() => setShowCalendar((prevState) => !prevState)}
          style={{ cursor: 'pointer' }}>
          {dayjs(chosenDay).format('MMM YYYY')}
        </Typography>
      </Stack>
      {isShowCalendar && (
        <div className={s.calendarWrapper}>
          <Calendar handleSetChosenDay={handleSetChosenDay} />
        </div>
      )}
      <WeekCalendar
        startDay={chosenDay}
        handleSetChosenDay={(day) => handleSetFormValues('date', day)}
      />
    </>
  )
}

export default ReservationCalendar
