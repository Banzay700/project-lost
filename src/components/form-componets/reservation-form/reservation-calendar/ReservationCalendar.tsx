/* eslint-disable import/no-extraneous-dependencies */
import { FC, useState, useEffect } from 'react'
import { Typography, Stack } from '@mui/material'
import dayjs from 'dayjs'
import { useField, Field } from 'formik'
import { Calendar } from './month-calendar'
import { WeekCalendar } from './week-calendar'
import s from './ReservationCalendar.module.scss'

interface ReservationCalendarProps {
  label: string
  name: string
}

const ReservationCalendar: FC<ReservationCalendarProps> = (props) => {
  const [chosenDay, setChosenDay] = useState<Date>(new Date())
  const [isShowCalendar, setShowCalendar] = useState(false)

  const { label, name } = props
  const [, , helpers] = useField(name)

  const handleSetChosenDay = (day: Date) => {
    setChosenDay(day)
    setShowCalendar(false)
  }

  const handleSetFormValues = (day: Date) => helpers.setValue(dayjs(day).format('YYYY-MM-DD'), true)

  useEffect(() => {
    handleSetFormValues(chosenDay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenDay])

  return (
    <Field name={name}>
      {() => (
        <>
          <Stack justifyContent="space-between" direction="row">
            <Typography variant="h3" component="p">
              {label}
            </Typography>
            <Typography
              variant="h3"
              component="p"
              onClick={() => setShowCalendar((prevState) => !prevState)}
              className={s.monthPicker}>
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
            handleSetChosenDay={(day) => handleSetFormValues(day)}
          />
        </>
      )}
    </Field>
  )
}

export default ReservationCalendar
