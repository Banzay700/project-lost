import { Stack, styled } from '@mui/material'
import { MS_CUSTOM_BREAKPOINT } from 'utils'

export const ProfilePageWrapper = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
}))

export const ProfileContentContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  height: '100%',
  [theme.breakpoints.down(MS_CUSTOM_BREAKPOINT)]: { flexDirection: 'column' },
}))

export const ScrollbarContainer = styled(Stack)(({ theme }) => ({
  height: 'calc(100vh - 76px)',
  [theme.breakpoints.down('sm')]: { height: 'calc(100vh - 165px)' },
}))
