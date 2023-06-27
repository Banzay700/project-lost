import { Stack, styled } from '@mui/material'

export const FormWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '16px',
  width: '404px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '85vw',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '90vw',
  },
}))
