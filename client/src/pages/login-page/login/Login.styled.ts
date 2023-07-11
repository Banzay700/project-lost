import { Stack, styled } from '@mui/material'
import { withProps } from 'utils'

interface InnerWrapperProps {
  chosenEmployee: string
}

export const LoginWrapper = styled(Stack)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: url(/login-background.webp) center center / cover no-repeat;
  height: 100%;
`

export const InnerWrapper = styled(
  Stack,
  withProps('chosenEmployee'),
)<InnerWrapperProps>(({ theme, chosenEmployee }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  gap: chosenEmployee ? '44px' : '114px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '85vw',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90vw',
  },
}))
