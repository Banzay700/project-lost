import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

interface WeekCalendarItemProps {
  day: string
  weekDay: string
  active: boolean
  onClick: () => void
}

export const WeekCalendarItem: FC<WeekCalendarItemProps> = (props) => {
  const { day, weekDay, active, onClick } = props
  return (
    <Stack
      sx={{
        width: '64px',
        height: '64px',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        bgcolor: active ? '#FFF5EE' : 'transparent',
      }}
      onClick={onClick}>
      <Typography fontWeight={600} color={active ? 'primary' : 'secondary'}>
        {day}
      </Typography>
      <Typography fontWeight={600} color={active ? 'primary' : 'secondary'}>
        {weekDay}
      </Typography>
    </Stack>
  )
}
