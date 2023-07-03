import { Stack, styled } from '@mui/material'

export const ContentWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.main,
}))
