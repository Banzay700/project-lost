import { Box, Stack, styled } from '@mui/material'

export const TotalPriceInfoWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'flex-start',
  gap: '12px',
  color: theme.palette.primary.main,
}))

export const PaymentMethodWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  background: theme.palette.background.lightGray,
  borderRadius: '20px',
  overflow: 'hidden',
}))

export const PaymentMethod = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: '5px 10px',
  borderRadius: '20px',
}))

export const TotalPrice = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.main,
  padding: '5px 10px',
}))
