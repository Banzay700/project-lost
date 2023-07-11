import { Stack, styled } from '@mui/material'

export const FormWrapper = styled(Stack)(({ theme }) => ({
  rowGap: '40px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '85vw',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90vw',
    rowGap: '30px',
  },
}))
