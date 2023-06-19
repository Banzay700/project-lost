import { Stack, styled } from '@mui/material'

export const SearchFilterBarWrapper = styled(Stack)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: '16px 24px',
  borderBottom: `1px solid ${theme.palette.border.default}`,
  [theme.breakpoints.down('md')]: { flexDirection: 'column', gap: '5px' },
  [theme.breakpoints.up('md')]: { gap: '24px', flexDirection: 'row', alignItems: 'center' },
  justifyContent: 'space-between',
}))
