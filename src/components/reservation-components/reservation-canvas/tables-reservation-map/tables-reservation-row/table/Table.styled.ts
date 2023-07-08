import { Stack, styled } from '@mui/material'
import dayjs from 'dayjs'

import { ReservationCanvasType } from 'types/index'
import { withProps } from 'utils/index'

interface TableWrapperProps {
  selected: boolean
}

interface TableTextProps {
  info?: ReservationCanvasType
}

export const TableWrapper = styled(
  Stack,
  withProps('selected'),
)<TableWrapperProps>(({ theme, selected }) => ({
  padding: '22px',
  borderRadius: '16px',
  backgroundColor: theme.palette.background.default,
  border: '2px solid',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  [theme.breakpoints.down(1035)]: { padding: '18px' },
  color: selected ? theme.palette.primary.main : theme.palette.primary.lightGrey,
}))

export const TableText = styled(
  Stack,
  withProps('info'),
)<TableTextProps>(({ theme, info }) => {
  const dateTimeString = dayjs(`${info?.date} ${info?.time}`)
  const currentTime = dayjs()
  const isPast = dateTimeString.isBefore(currentTime)

  const color =
    info === undefined
      ? theme.palette.secondary.blue
      : isPast
      ? theme.palette.primary.red
      : theme.palette.primary.main

  const backgroundColor =
    info === undefined
      ? theme.palette.secondary.lightBlue
      : isPast
      ? theme.palette.primary.lightRed
      : theme.palette.primary.extraLight

  return {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: { width: '84px', height: '84px' },
    color,
    backgroundColor,
  }
})
