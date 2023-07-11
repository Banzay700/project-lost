import { styled } from '@mui/material'
import { Form } from 'formik'

export const DeliveryFormContainer = styled(Form)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: 16,
  [theme.breakpoints.up('md')]: { width: '720px' },
  [theme.breakpoints.down('md')]: { width: '520px' },
}))
