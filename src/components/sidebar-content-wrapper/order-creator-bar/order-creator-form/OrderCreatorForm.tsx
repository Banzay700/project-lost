import { FC, useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { Form, Formik } from 'formik'

import { Button, SelectInput } from 'UI'
import { InputSelectItemType, OrderCreatorFormReturnType } from 'types'
import { useOrderReducer } from 'hooks'
import { useGetFreeTablesQuery } from 'store/api'
import { FadeIn } from 'utils'
import { RadioButtonsGroup } from './radio-buttons-group'
import { radioButtonGroupContent } from './radio-buttons-group/radioButtonGroup.utils'
import { MAIN_ORDER_TYPE, initialValue, validationSchema } from './orderCreatorForm.utils'
import { InfoBox } from './info-box'
import s from './OrderCreatorForm.module.scss'

interface OrderCreatorFormProps {
  onSubmit: (values: OrderCreatorFormReturnType) => void
}

const OrderCreatorForm: FC<OrderCreatorFormProps> = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState<OrderCreatorFormReturnType>(initialValue)
  const [selectValue, setSelectValue] = useState('')

  const [disabled, setDisabled] = useState(true)
  const [isSelect, setIsSelect] = useState(false)
  const { activeOrder } = useOrderReducer()
  const { data } = useGetFreeTablesQuery()

  const selectItems: InputSelectItemType[] | undefined =
    data && data.map(({ number }) => ({ title: number, value: number }))

  const handleValue = (value: string) => {
    setSelectValue(value)
    setDisabled(false)
  }

  const handleHideSelect = (value: string) => {
    setIsSelect(value === MAIN_ORDER_TYPE)
    setDisabled(value === MAIN_ORDER_TYPE)
  }

  useEffect(() => {
    if (activeOrder.storeStatus === 'open') {
      setFormValues({ orderType: activeOrder.orderType, table: activeOrder.table })
    }
  }, [activeOrder, setFormValues])

  return (
    <FadeIn className={s.newOrderForm}>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={formValues}
        enableReinitialize>
        <Form>
          <Stack spacing={6}>
            <RadioButtonsGroup
              name="orderType"
              content={radioButtonGroupContent}
              handleHideSelect={handleHideSelect}
            />
            {isSelect && (
              <SelectInput
                name="table"
                label="Select table"
                data={selectItems}
                active={!!selectValue}
                handleValue={handleValue}
              />
            )}
          </Stack>
          <Stack sx={{ height: '100%' }}>
            <InfoBox tableNumber={selectValue} />
            <Button variant="contained" size="medium" type="submit" disabled={disabled} fullWidth>
              Open New Order
            </Button>
          </Stack>
        </Form>
      </Formik>
    </FadeIn>
  )
}

export default OrderCreatorForm
