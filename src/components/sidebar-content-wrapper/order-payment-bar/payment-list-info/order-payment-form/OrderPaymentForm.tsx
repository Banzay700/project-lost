import { ChangeEvent, FC, ReactNode } from 'react'
import { Stack } from '@mui/material'
import { Form, Formik } from 'formik'

import { Button, Input } from 'UI'
import { IconAddTipAmount, IconEmail } from 'assets/index'
import { PaymentFormReturnType } from 'types/index'
import { OrderPaymentMethod } from './order-payment-method'
import { initialValues, validationSchema } from './OrderPaymentForm.utils'

import s from './OrderPaymentForm.module.scss'

interface OrderPaymentFormProps {
  onSubmit: (values: PaymentFormReturnType) => void
  children: ReactNode
  isTip: boolean
  isEmail: boolean
  onInput: (e: ChangeEvent<HTMLInputElement>) => void
}

const OrderPaymentForm: FC<OrderPaymentFormProps> = ({
  children,
  isTip,
  isEmail,
  onSubmit,
  onInput,
}) => {
  const formikConfig = { initialValues, validationSchema, onSubmit }

  return (
    <div className={s.formWrapper}>
      <Formik {...formikConfig}>
        <Form>
          <OrderPaymentMethod name="paymentMethod" />
          {children}
          <Stack spacing={4} sx={{ flex: '1 1 auto' }}>
            {isTip && (
              <Input
                placeholder="Tip Amount"
                name="tip"
                label="Tip Amount"
                icon={<IconAddTipAmount />}
                onInput={onInput}
                maxLength={6}
              />
            )}
            {isEmail && (
              <Input placeholder="Email" name="email" label="Email" icon={<IconEmail />} />
            )}
          </Stack>
          <Button variant="contained" size="default" type="submit" fullWidth>
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  )
}

export default OrderPaymentForm
