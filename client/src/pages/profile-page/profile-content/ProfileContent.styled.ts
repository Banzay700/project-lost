import { styled, Stack } from '@mui/material'

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  width: '100%',
  gap: '20px',
  padding: '40px',
  [theme.breakpoints.down('md')]: { padding: '22px' },
}))
