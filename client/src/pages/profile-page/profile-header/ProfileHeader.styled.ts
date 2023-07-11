import { styled, Stack, Box, Typography } from '@mui/material'
import { MS_CUSTOM_BREAKPOINT } from 'utils'

export const ProfileHeaderWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  borderColor: theme.palette.border.default,
}))

export const Decor = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  minWidth: '430px',
  borderRight: '1px solid',
  borderColor: theme.palette.border.default,
  [theme.breakpoints.down('lg')]: { minWidth: '380px' },
  [theme.breakpoints.down('md')]: { minWidth: '320px' },
  [theme.breakpoints.down('sm')]: { minWidth: '300px' },
  [theme.breakpoints.down(MS_CUSTOM_BREAKPOINT)]: { minWidth: '0px' },
}))

export const TitleWrapper = styled(Typography)(({ theme }) => ({
  padding: '16px 53px 0',
  width: '100%',
  [theme.breakpoints.down('md')]: { padding: '16px 35px 0' },
  [theme.breakpoints.down(MS_CUSTOM_BREAKPOINT)]: {
    textAlign: 'center',
    padding: '16px',
  },
}))
