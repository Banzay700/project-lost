import { FC, useEffect, useState } from 'react'
import { Stack } from '@mui/material'
import { Formik } from 'formik'

import { Button, SelectInput } from 'UI'
import { InputSelectItemType, OrderCreatorFormReturnType } from 'types'
import { useOrderReducer } from 'hooks'
import { useGetFreeTablesQuery, useLazyGetReservationInfoQuery } from 'store/api'
import { RadioButtonsGroup } from './radio-buttons-group'
import { radioButtonGroupContent } from './radio-buttons-group/radioButtonGroup.utils'
import { InfoBox } from './info-box'
import { MAIN_ORDER_TYPE, initialValue, validationSchema } from './orderCreatorForm.utils'
import { OrderCreatorFormWrapper, OrderForm } from './OrderCreatorForm.styled'

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
  const [getReservationInfo, { data: reservationInfo }] = useLazyGetReservationInfoQuery()

  const selectItems: InputSelectItemType[] | undefined =
    data && data.map(({ number }) => ({ title: number, value: number }))

  const handleValue = (value: string) => {
    setSelectValue(value)
    setDisabled(false)
    getReservationInfo(value)
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
    <OrderCreatorFormWrapper>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={formValues}
        enableReinitialize>
        <OrderForm>
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
            <InfoBox data={reservationInfo} />
            <Button variant="contained" size="medium" type="submit" disabled={disabled} fullWidth>
              Open New Order
            </Button>
          </Stack>
        </OrderForm>
      </Formik>
    </OrderCreatorFormWrapper>
  )
}

export default OrderCreatorForm
