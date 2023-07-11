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
  padding: '17px 0px',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  background: `${
    (isDisabled && theme.palette.background.main) || (active && theme.palette.background.lightMain)
  }`,
}))
