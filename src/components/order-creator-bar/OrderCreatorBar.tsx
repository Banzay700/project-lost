import { useNavigate, useNavigation } from 'react-router-dom'
import { FC, useState } from 'react'
import { Stack } from '@mui/material'

import { OrderDetailsList } from 'components'
import { ToggleMenu } from 'UI'
import { useNewOrderReducer } from 'hooks'
import { OrderCreatorFormValues, ToggleMenuValuesType } from 'types'
import { ROUTES } from 'routes'
import { useCreateOrderMutation, useUpdateTableStatusMutation } from 'store/api'
import { OrderCreatorForm } from './order-creator-form'
import { preparedData, toggleMenuValues, unique } from './orderCreatorBar.utils'

const OrderCreatorBar: FC = () => {
  const [toggleValue, setToggleValue] = useState<string>('orderInfo')
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [orderID, setOrderID] = useState(0)

  const [updateTableStatus] = useUpdateTableStatusMutation()
  const [createOrder] = useCreateOrderMutation()
  const { newlyOrder, dishes, createNewOrder } = useNewOrderReducer()

  const navigate = useNavigate()

  const handleFormSubmit = ({ orderType, table }: OrderCreatorFormValues) => {
    const orderNumber = unique()

    const orderInfo = { orderNumber, orderType, table, dishes: [] }

    setOrderID(orderNumber)
    createNewOrder(orderInfo)

    if (table) updateTableStatus(table)
    setToggleValue('dishes')
    setButtonDisabled(false)
  }

  const handleCreateOrder = () => {
    const data = preparedData(newlyOrder)
    navigate(ROUTES.ORDERS)
    createOrder(data)
  }

  const handleToggleChange = (value: string) => {
    setToggleValue(value)
  }

  return (
    <Stack flex="1" height="100%">
      <ToggleMenu
        menuItems={toggleMenuValues}
        onChange={handleToggleChange}
        defaultValue={toggleValue}
        buttonDisabled={buttonDisabled}
      />
      {toggleValue === 'orderInfo' && <OrderCreatorForm onSubmit={handleFormSubmit} />}
      {toggleValue === 'dishes' && (
        <OrderDetailsList
          isPicker
          orderId={orderID}
          orderItems={dishes}
          onClick={handleCreateOrder}
        />
      )}
    </Stack>
  )
}

export default OrderCreatorBar
