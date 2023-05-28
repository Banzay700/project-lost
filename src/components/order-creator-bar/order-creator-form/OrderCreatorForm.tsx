import { FC, useState } from 'react'
import { Stack } from '@mui/material'
import { Form, Formik } from 'formik'

import { Button, SelectInput, TableInfoBox } from 'UI'
import { OrderCreatorFormValues } from 'types'
import { useGetFreeTablesQuery } from 'store/api'
import { RadioButtonsGroup } from './radio-buttons-group'
import { radioButtonGroupContent } from './radio-buttons-group/radioButtonGroup.utils'
import { MAIN_ORDER_TYPE, initialValue, validationSchema } from './orderCreatorForm.utils'
import s from './OrderCreatorForm.module.scss'

interface OrderCreatorFormProps {
  onSubmit: (values: OrderCreatorFormValues) => void
}

const OrderCreatorForm: FC<OrderCreatorFormProps> = ({ onSubmit }) => {
  const [selectValue, setSelectValue] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [hidden, setHidden] = useState(false)

  const handleValue = (value: string) => {
    setSelectValue(value)
    setDisabled(false)
  }

  const handleHideSelect = (value: string) => {
    setHidden(value === MAIN_ORDER_TYPE)
    setDisabled(value === MAIN_ORDER_TYPE)
  }

  const { data } = useGetFreeTablesQuery()

  return (
    <div className={s.newOrderForm}>
      <Formik initialValues={initialValue} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <Stack spacing={6}>
            <RadioButtonsGroup
              name="orderType"
              content={radioButtonGroupContent}
              handleHideSelect={handleHideSelect}
            />
            <SelectInput
              name="table"
              label="Select table"
              hidden={hidden}
              data={data}
              handleValue={handleValue}
            />
          </Stack>
          <Stack sx={{ height: '100%' }}>
            <TableInfoBox tableNumber={selectValue} />
            <Button variant="contained" size="default" type="submit" disabled={disabled} fullWidth>
              Open New Order
            </Button>
          </Stack>
        </Form>
      </Formik>
    </div>
  )
}

export default OrderCreatorForm
