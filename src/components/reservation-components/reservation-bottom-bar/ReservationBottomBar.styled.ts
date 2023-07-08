import { Stack, styled } from '@mui/material'

export const ReservationBarWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '18px',
  borderRadius: '16px',
  boxShadow: '0 16px 30px -6px rgba(25, 25, 28, 0.16)',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('lg')]: { padding: '12px' },
}))
