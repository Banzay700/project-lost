import { Stack, styled } from '@mui/material'

export const SidebarDeliveryInfoWrapper = styled(Stack)(({ theme }) => ({
  height: '100%',
  width: '100%',
  borderLeft: '1px solid',
  borderColor: theme.palette.border.default,
  maxWidth: '290px',
  [theme.breakpoints.up('lg')]: { maxWidth: '340px' },
  [theme.breakpoints.up('xl')]: { maxWidth: '360px' },
}))

export const SidebarDeliveryActionsWrapper = styled(Stack)(({ theme }) => ({
  gap: '24px',
  padding: '18px 16px',
  borderTop: '1px solid',
  borderColor: theme.palette.border.default,
}))
