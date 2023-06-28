import { Stack, styled } from '@mui/material'
import { Form } from 'formik'

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`
export const InputsWrapper = styled(Stack)`
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
`
