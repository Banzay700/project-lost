import { FC, ReactNode } from 'react'
import { Stack } from '@mui/material'
import { Form, Formik } from 'formik'

import { Button, Input } from 'UI'
import { IconAddTipAmount, IconEmail } from 'assets'
import { OrderPaymentFormValuesType } from 'types'
import { OrderPaymentMethod } from './order-payment-method'
import { initialValues, validationSchema } from './OrderPaymentForm.utils'

interface OrderPaymentFormProps {
  onSubmit: (values: OrderPaymentFormValuesType) => void
  children: ReactNode
  isTip: boolean
  isEmail: boolean
}

const OrderPaymentForm: FC<OrderPaymentFormProps> = ({ children, isTip, isEmail, onSubmit }) => {
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Stack spacing={4}>
            <OrderPaymentMethod name="paymentMethod" />
            {children}
            <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
              <Stack spacing={4}>
                {isTip && (
                  <Input
                    placeholder="Tip Amount"
                    name="tipAmount"
                    label="Tip Amount"
                    icon={<IconAddTipAmount />}
                  />
                )}
                {isEmail && (
                  <Input placeholder="Email" name="email" label="Email" icon={<IconEmail />} />
                )}
              </Stack>
            </div>
            <Button variant="contained" size="default" type="submit" fullWidth>
              Submit
            </Button>
          </Stack>
        </Form>
      </Formik>
    </div>
  )
}

export default OrderPaymentForm
