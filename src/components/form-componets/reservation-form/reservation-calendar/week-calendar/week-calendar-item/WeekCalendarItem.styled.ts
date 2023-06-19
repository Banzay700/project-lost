import { Stack, styled } from '@mui/material'
import { withProps } from 'utils/index'

type ItemDayWrapperProps = {
  active: boolean
}

export const WeekCalendarItemWrapper = styled(
  Stack,
  withProps('active'),
)<ItemDayWrapperProps>(({ theme, active }) => ({
  flex: 1,
  padding: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  gap: '2px',
  backgroundColor: active ? theme.palette.primary.extraLight : 'transparent',
}))
