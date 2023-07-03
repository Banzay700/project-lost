import { Card, Skeleton, styled } from '@mui/material'

export const OrderDetailsItemsSkeletonWrapper = styled(Card)(({ theme }) => ({
  width: '100%',
  boxShadow: 'none',
  display: 'flex',
  gap: '12px',
  padding: '16px',
  minHeight: '98px',
  borderRadius: 0,
  background: 'inherit',
  borderBottom: '1px solid',
  borderColor: theme.palette.border.default,
  position: 'relative',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: { padding: '8px', minHeight: '71px' },
}))

export const CardMediaWrapper = styled(Skeleton)(({ theme }) => ({
  minWidth: '74px',
  minHeight: '74px',
  borderRadius: '12px',
  flexShrink: 0,
  transform: 'none',

  [theme.breakpoints.down('sm')]: {
    minWidth: '54px',
    minHeight: '54px',
  },
}))
