import { FC } from 'react'
import dayjs from 'dayjs'
import { Stack, Typography } from '@mui/material'

import { Icon } from 'assets'
import { LabelWrapper } from './CalendarLabels.styled'

interface CalendarLabelsProps {
  label: string
  chosenDate: Date
  showCalendar: () => void
}

const CalendarLabels: FC<CalendarLabelsProps> = ({ label, chosenDate, showCalendar }) => {
  const monthAndYearFormat = dayjs(chosenDate).format('MMM YYYY')

  return (
    <LabelWrapper>
      <Typography variant="h3" component="span">
        {label}
      </Typography>
      <Typography
        variant="h3"
        component="span"
        onClick={showCalendar}
        style={{ cursor: 'pointer' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {monthAndYearFormat} <Icon.TickDown width="25px" height="25px" />
        </Stack>
      </Typography>
    </LabelWrapper>
  )
}

export default CalendarLabels
