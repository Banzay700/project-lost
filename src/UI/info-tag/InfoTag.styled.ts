import { Chip, styled } from '@mui/material'
import { withProps } from 'utils/withProps'

export interface InfoType {
  type?: 'blue' | 'primary' | 'yellow' | 'green' | 'red' | 'default'
  withBorder?: boolean
}

export const InfoTagWrapper = styled(
  Chip,
  withProps('type', 'withBorder'),
)<InfoType>(({ type, theme, withBorder }) => {
  const borderColor = withBorder ? `1px solid currentColor` : ''
  if (type === 'primary')
    return {
      background: theme.palette.background.accent,
      color: theme.palette.primary.main,
      border: borderColor,
    }
  if (type === 'blue')
    return {
      background: theme.palette.background.lightBlue,
      color: theme.palette.primary.blue,
      border: borderColor,
    }
  if (type === 'green')
    return {
      background: theme.palette.background.lightGreen,
      color: theme.palette.primary.green,
      border: borderColor,
    }

  if (type === 'red')
    return {
      background: theme.palette.background.lightRed,
      color: theme.palette.primary.red,
      border: borderColor,
    }
  if (type === 'yellow')
    return {
      background: theme.palette.background.lightYellow,
      color: theme.palette.primary.yellow,
      border: borderColor,
    }

  return {
    background: theme.palette.background.lightGray,
    color: theme.palette.primary.gray,
    border: borderColor,
  }
})
