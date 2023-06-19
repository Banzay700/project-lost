import { Stack, styled } from '@mui/material'
import { Icon } from 'assets'
import { withProps } from 'utils'

export const PartySizeWrapper = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.border.default}`,
  [theme.breakpoints.up('xl')]: { width: 'fit-content' },
  [theme.breakpoints.down('xl')]: { width: '100%' },
  minWidth: '250px',
  borderRadius: '16px',
  flexDirection: 'row',
  alignSelf: 'center',
  overflow: 'hidden',
  scrollBehavior: 'smooth',
  position: 'relative',
}))

export const PartySizeButtonScrollWrapper = styled(Stack)`
  padding: 10px;
  justify-content: center;
`

export const PartySizeButtonScroll = styled(
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
