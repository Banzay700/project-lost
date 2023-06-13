import { FC, useState, useEffect } from 'react'
import { Typography, Stack, Box } from '@mui/material'
import dayjs from 'dayjs'
import { useField, useFormikContext } from 'formik'
import { IconTickDown } from 'assets/icons'
import { Calendar } from './month-calendar'
import { WeekCalendar } from './week-calendar'
import s from './ReservationCalendar.module.scss'

interface ReservationCalendarProps {
  label: string
  name: string
  onChange?: (value: string) => void
}

const ReservationCalendar: FC<ReservationCalendarProps> = (props) => {
  const { label, name, onChange } = props
  const [chosenDay, setChosenDay] = useState<Date>(new Date())
  const [isShowCalendar, setShowCalendar] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()
  const monthAndYearFormat = dayjs(chosenDay).format('MMM YYYY')

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
    handleSetFormValues(chosenDay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenDay])

  useEffect(() => {
    if (!field.value) {
      setActiveIndex(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value])

  return (
    <Box {...field}>
      <Stack direction="row" justifyContent="center" style={{ marginTop: '12px' }}>
        <Stack gap="12px" style={{ maxWidth: 'fit-content' }}>
          <Stack justifyContent="space-between" direction="row" alignItems="center">
            <Typography variant="h3" component="span">
              {label}
            </Typography>
            <Typography
              variant="h3"
              component="span"
              onClick={() => setShowCalendar((prevState) => !prevState)}
              className={s.monthPicker}>
              <Stack direction="row" alignItems="center">
                {monthAndYearFormat} <IconTickDown height="15px" width="15px" />
              </Stack>
            </Typography>
          </Stack>
          <WeekCalendar
            startDay={chosenDay}
            handleSetChosenDay={(day) => handleSetFormValues(day)}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </Stack>
      </Stack>
      {isShowCalendar && (
        <div className={s.calendarWrapper}>
          <Calendar handleSetChosenDay={handleSetChosenDay} />
        </div>
      )}
    </Box>
  )
}

export default ReservationCalendar
