import { Box, styled } from '@mui/material'

import { ReservationCanvasType } from 'types'
import dayjs from 'dayjs'

interface IconWrapperProps {
  info?: ReservationCanvasType
}

export const IconWrapper = styled(Box)<IconWrapperProps>(({ theme, info }) => {
  const { palette } = theme
  const dateTimeString = dayjs(`${info?.date} ${info?.time}`)
  const currentTime = dayjs()
  const isPast = dateTimeString.isBefore(currentTime)

  return {
    position: 'absolute',
    top: '5px',
    right: '8px',
    color: isPast ? palette.primary.red : palette.primary.light,
    '&:hover': { color: isPast ? palette.primary.darkRed : palette.primary.main },
  }
})
