import { FC, useState, useEffect } from 'react'
import { Stack } from '@mui/material'
import dayjs from 'dayjs'
import { useField, useFormikContext } from 'formik'

import { Calendar } from './month-calendar'
import { WeekCalendar } from './week-calendar'
import { CalendarLabels } from './calendar-labels'
import { CalendarWrapper } from './ReservationCalendar.styled'

interface ReservationCalendarProps {
  label: string
  name: string
  onChange?: (value: string) => void
}

const ReservationCalendar: FC<ReservationCalendarProps> = ({ label, name, onChange }) => {
  const [chosenDay, setChosenDay] = useState<Date>(new Date())
  const [isShowCalendar, setShowCalendar] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()

  const handleShowCalendar = () => setShowCalendar((prevState) => !prevState)
  const handleSetChosenDay = (day: Date) => {
    setChosenDay(day)
    setShowCalendar(false)
  }

  const handleSetFormValues = (day: Date) => {
    const selectDate = dayjs(day).format('YYYY-MM-DD')

    setFieldValue(name, selectDate)
    if (onChange) onChange(selectDate)
  }

  useEffect(() => {
    if (!field.value) setActiveIndex(null)
  }, [field.value]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setActiveIndex(0)
    handleSetFormValues(chosenDay)
  }, [chosenDay]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Stack {...field} direction="row" width="100%">
        <Stack width="100%" gap="10px">
          <CalendarLabels label={label} chosenDate={chosenDay} showCalendar={handleShowCalendar} />
          <WeekCalendar
            startDay={chosenDay}
            handleSetChosenDay={(day) => handleSetFormValues(day)}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </Stack>
      </Stack>
      {isShowCalendar && (
        <CalendarWrapper>
          <Calendar handleSetChosenDay={handleSetChosenDay} />
        </CalendarWrapper>
      )}
    </>
  )
}

export default ReservationCalendar
