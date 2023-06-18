import { Stack, styled } from '@mui/material'

export const SidebarContentContainer = styled(Stack)(({ theme }) => ({
  height: '100%',
  width: '100%',
  borderLeft: '1px solid',
  borderColor: theme.palette.border.default,
  maxWidth: '290px',
  [theme.breakpoints.up('lg')]: { maxWidth: '340px' },
  [theme.breakpoints.up('xl')]: { maxWidth: '360px' },
}))
