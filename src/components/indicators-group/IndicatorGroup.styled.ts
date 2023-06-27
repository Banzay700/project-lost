import { Stack, styled } from '@mui/material'

export const IndicatorGroupWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  flex: 1,
  gap: '32px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '400px',
    justifyContent: 'space-between',
    gap: '0',
  },
}))
