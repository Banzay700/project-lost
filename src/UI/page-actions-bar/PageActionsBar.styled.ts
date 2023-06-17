import { Stack, styled } from '@mui/material'

interface PageActionsBarWrapperProps {
  $isSmallScreen: boolean
}

export const PageActionsBarWrapper = styled(Stack, {
  shouldForwardProp: (prop) => prop !== '$isSmallScreen',
})<PageActionsBarWrapperProps>(({ $isSmallScreen, theme }) => ({
  minHeight: $isSmallScreen ? 'fit-content' : '71px',
  padding: '16px 24px',
  borderBottom: `1px solid ${theme.palette.text.border}`,
  flexDirection: $isSmallScreen ? 'column' : 'row',
  justifyContent: 'space-between',
  gap: '24px',
}))
