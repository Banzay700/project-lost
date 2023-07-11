import { Stack, styled } from '@mui/material'

export const BottomBarIconWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  paddingRight: '15px',
  alignItems: 'center',
  gap: '10px',
  borderRight: '1px solid',
  borderColor: theme.palette.border.default,
}))

export const IconContainer = styled(Stack)(({ theme }) => ({
  borderRadius: '12px',
  padding: '12px',
  backgroundColor: theme.palette.background.main,
}))
