import { Stack, styled } from '@mui/material'
import { Icon } from 'assets'
import { withProps } from 'utils'

export const FilterMenuWrapper = styled(
  Stack,
  withProps('isControlScroll'),
)<{ isControlScroll?: boolean }>(({ isControlScroll }) => ({
  gap: '8px',
  maxWidth: `${isControlScroll ? '374px' : '100%'}`,
  alignItems: 'center',
  overflowX: 'hidden',
  scrollBehavior: 'smooth',
}))

export const ButtonScrollWrapper = styled(Stack)`
  padding: 10px;
  justify-content: center;
`

export const ButtonScroll = styled(
  Icon.ArrowLeft,
  withProps('transformRight'),
)<{ transformRight?: boolean }>(({ theme, transformRight }) => ({
  cursor: 'pointer',
  userSelect: 'none',
  transform: `${transformRight && 'scale(-1, 1)'}`,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))
