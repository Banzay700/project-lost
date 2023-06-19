import { FC, useState, useEffect } from 'react'
import { Typography, Stack, Box, useTheme, useMediaQuery } from '@mui/material'
import dayjs from 'dayjs'
import { useField, useFormikContext } from 'formik'
import { Icon } from 'assets'
import { Calendar } from './month-calendar'
import { WeekCalendar } from './week-calendar'
import {
  CalendarWrapper,
  WeekWrapper,
  WeekOuterWrapper,
  InnerWrapper,
} from './ReservationCalendar.styled'

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

  const theme = useTheme()
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'))

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
      <WeekWrapper>
        <WeekOuterWrapper>
          <InnerWrapper>
            <Typography variant="h3" component="span">
              {label}
            </Typography>
            <Typography
              variant="h3"
              component="span"
              onClick={() => setShowCalendar((prevState) => !prevState)}
              style={{ cursor: 'pointer' }}>
              <Stack direction="row" alignItems="center">
                {monthAndYearFormat} <Icon.TickDown />
              </Stack>
            </Typography>
          </InnerWrapper>
          <WeekCalendar
            startDay={chosenDay}
            handleSetChosenDay={(day) => handleSetFormValues(day)}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            maxDaysInWeek={matchesLG ? 5 : 7}
          />
        </WeekOuterWrapper>
      </WeekWrapper>
      {isShowCalendar && (
        <CalendarWrapper>
          <Calendar handleSetChosenDay={handleSetChosenDay} />
        </CalendarWrapper>
      )}
    </Box>
  )
}

export default ReservationCalendar
