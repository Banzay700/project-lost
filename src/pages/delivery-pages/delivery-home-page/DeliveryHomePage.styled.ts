import { Stack, styled } from '@mui/material'

export const DeliveryHomePageWrapper = styled(Stack)(({ theme }) => ({
  height: 'calc(100% - 76px)',

  [theme.breakpoints.down('sm')]: {
    height: 'calc(100% - 165px)',
  },
}))
