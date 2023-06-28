import { Stack, styled } from '@mui/material'
import { MS_CUSTOM_BREAKPOINT } from 'utils'

export const SidebarWrapper = styled(Stack)(({ theme }) => ({
  minWidth: '430px',
  padding: '0 40px 20px',
  height: '100%',
  alignItems: 'start',
  justifyContent: 'space-between',
  borderRight: '1px solid',
  borderColor: theme.palette.border.default,
  backgroundColor: theme.palette.background.main,
  [theme.breakpoints.down('lg')]: { minWidth: '380px' },
  [theme.breakpoints.down('md')]: {
    padding: '0 20px 20px',
    minWidth: '320px',
  },
  [theme.breakpoints.down('sm')]: { minWidth: '300px' },
  [theme.breakpoints.down(MS_CUSTOM_BREAKPOINT)]: {
    backgroundColor: theme.palette.background.default,
  },
}))
