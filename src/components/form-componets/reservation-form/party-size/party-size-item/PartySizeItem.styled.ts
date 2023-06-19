import { Stack, styled } from '@mui/material'
import { withProps } from 'utils'

type ItemWrapperProps = {
  active: boolean
  isDisabled?: boolean
}

export const ItemWrapper = styled(
  Stack,
  withProps('active', 'isDisabled'),
)<ItemWrapperProps>(({ active, theme, isDisabled }) => ({
  minWidth: '64px',
  minHeight: '64px',
  height: '64px',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  background: `${
    (isDisabled && theme.palette.background.main) || (active && theme.palette.background.lightMain)
  }`,
}))
