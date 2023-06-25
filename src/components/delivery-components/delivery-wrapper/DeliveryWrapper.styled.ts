import styled from 'styled-components'
import { Stack } from '@mui/material'

export const DeliveryWrapper = styled(Stack)(({ theme }) => ({
  height: 'calc(100% - 76px)',

  [theme.breakpoints.down('sm')]: {
    height: 'calc(100% - 165px)',
  },
}))
export default DeliveryWrapper
