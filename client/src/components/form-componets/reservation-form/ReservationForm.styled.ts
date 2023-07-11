import { Stack, styled } from '@mui/material'
import { Form } from 'formik'
import { FadeIn } from 'utils'

export const ReservationFormWrapper = styled(FadeIn)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 40px 30px;
`
export const ButtonWrapper = styled(Stack)`
  flex-direction: row;
  gap: 12px;
  width: 100%;
`
export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  height: 100%;
`
