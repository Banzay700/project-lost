import { Stack, styled } from '@mui/material'

export const FormWrapper = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    maxWidth: '85vw',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90vw',
  },
}))
