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
  isFormReset: boolean
  setFormReset: (status: boolean) => void
}

const ReservationCalendar: FC<ReservationCalendarProps> = (props) => {
  const [chosenDay, setChosenDay] = useState<Date>(new Date())
  const [isShowCalendar, setShowCalendar] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const { label, name, setFormReset, isFormReset } = props
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

  console.log(activeIndex)

  // useEffect(() => {
  //   // console.log(isFormReset)

  //   if (isFormReset) {
  //     setActiveIndex(null)
  //     console.log(activeIndex)
  //     // setFormReset(false)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isFormReset])

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
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </>
      )}
    </Field>
  )
}

export default ReservationCalendar
