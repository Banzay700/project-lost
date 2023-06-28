import { Stack, styled } from '@mui/material'
import { Form } from 'formik'

export const ProfileFormWrapper = styled(Stack)(({ theme }) => ({
  width: '70%',
  gap: '20px',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
  },
}))

export const UserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`
