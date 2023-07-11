import { ChangeEvent, FC, ReactNode } from 'react'
import { Stack } from '@mui/material'
import { Formik } from 'formik'

import { Button, Input } from 'UI'
import { Icon } from 'assets'
import { PaymentFormReturnType } from 'types/index'
import { OrderPaymentMethod } from './order-payment-method'
import { initialValues, validationSchema } from './OrderPaymentForm.utils'
import { FormWrapper, PaymentForm } from './OrderPaymentForm.styled'

interface OrderPaymentFormProps {
  onSubmit: (values: PaymentFormReturnType) => void
  children: ReactNode
  isTip: boolean
  isEmail: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const OrderPaymentForm: FC<OrderPaymentFormProps> = (props) => {
  const { children, isTip, isEmail, onSubmit, onChange } = props
  const formikConfig = { initialValues, validationSchema, onSubmit }

  return (
    <FormWrapper>
      <Formik {...formikConfig}>
        <PaymentForm>
          <OrderPaymentMethod name="paymentMethod" />
          {children}
          <Stack spacing={4} sx={{ flex: '1 1 auto' }}>
            {isTip && (
              <Input
                placeholder="Tip Amount"
                name="tip"
                label="Tip Amount"
                icon={<Icon.Tip />}
                onChange={onChange}
                maxLength={6}
              />
            )}
            {isEmail && (
              <Input placeholder="Email" name="email" label="Email" icon={<Icon.Email />} />
            )}
          </Stack>
          <Button variant="contained" size="medium" type="submit" fullWidth>
            Submit
          </Button>
        </PaymentForm>
      </Formik>
    </FormWrapper>
  )
}

export default OrderPaymentForm
