import { styled } from '@mui/material'
import { Form } from 'formik'
import { FadeIn } from 'utils'

export const OrderCreatorFormWrapper = styled(FadeIn)`
  display: flex;
  height: 100%;
  padding: 18px 16px;
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.palette.border.default};
`

export const OrderForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`
