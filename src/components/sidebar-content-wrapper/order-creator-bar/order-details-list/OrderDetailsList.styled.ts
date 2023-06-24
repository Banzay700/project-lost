import { Stack, styled } from '@mui/material'

export const ListInfoActionsContainer = styled(Stack)(({ theme }) => ({
  gap: '24px',
  padding: '18px 16px',
  borderTop: '1px solid',
  borderColor: theme.palette.border.default,
}))
