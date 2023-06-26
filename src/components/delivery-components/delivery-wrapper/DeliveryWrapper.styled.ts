import { Stack, styled } from '@mui/material'

export const DeliveryWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: 'calc(100% - 76px)',
  flex: '1',

  [theme.breakpoints.down('sm')]: {
    height: 'calc(100% - 165px)',
  },
}))
export default DeliveryWrapper
