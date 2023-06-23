import { Stack, styled } from '@mui/material'

export const DeliveryHomePageWrapper = styled(Stack)(({ theme }) => ({
  padding: '0 20px 20px',
  height: 'calc(100% - 76px)',

  [theme.breakpoints.down('sm')]: {
    height: 'calc(100% - 165px)',
  },
}))
