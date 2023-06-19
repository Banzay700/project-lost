import styled from 'styled-components'
import { Form } from 'formik'
import { Stack } from '@mui/material'

export const ReservationFormWrapper = styled(Stack)`
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const ReservationFormStyle = styled(Form)`
  gap: 12px;
  max-width: 95%;
`
export const ButtonWrapper = styled(Stack)`
  margin-top: 24px;
  flex-direction: row;
  gap: 12px;
`
