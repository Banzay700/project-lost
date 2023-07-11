import { Stack, styled } from '@mui/material'

export const StatisticsWrapper = styled(Stack)(({ theme }) => ({
  flex: 1,
  height: '100%',
  padding: '20px',
  gap: '15px',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.main,
}))
