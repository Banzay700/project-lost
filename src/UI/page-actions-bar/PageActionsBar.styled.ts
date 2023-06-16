import { Stack } from '@mui/material'
import styled from 'styled-components'
import { theme } from 'theme'

interface PageActionsBarWrapperProps {
  $isSmallScreen: boolean
}

export const PageActionsBarWrapper = styled(Stack)<PageActionsBarWrapperProps>(
  ({ $isSmallScreen }) => ({
    minHeight: $isSmallScreen ? 'fit-content' : '71px',
    padding: '16px 24px',
    borderBottom: `1px solid ${theme.palette.text.border}`,
    flexDirection: $isSmallScreen ? 'column' : 'row',
    justifyContent: 'space-between',
    gap: '24px',
  }),
)
