import { useNavigate } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import { Stack } from '@mui/material'

import { OrderDetailsList } from 'components'
import { ToggleMenu } from 'UI'
import { useOrderReducer } from 'hooks'

import { ROUTES } from 'routes'
import { useCreateOrderMutation, useUpdateTableStatusMutation } from 'store/api'
import { OrderCreatorForm } from './order-creator-form'
import { getFormedOrder, toggleMenuValues, unique } from './orderCreatorBar.utils'
import { OrderCreatorFormValues, OrderActiveType } from 'types/COMMON_TYPES'

const OrderCreatorBar: FC = () => {
  const [toggleValue, setToggleValue] = useState<string>('orderInfo')
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [orderID, setOrderID] = useState(0)

  const [updateTableStatus] = useUpdateTableStatusMutation()
  const [createOrder] = useCreateOrderMutation()
  const { newOrder, dishes, activeOrder, createNewOrder, addActiveOrder, clearNewOrderState } =
    useOrderReducer()

  const navigate = useNavigate()

  const handleFormSubmit = ({ orderType, table }: OrderCreatorFormValues) => {
    const orderNumber = unique()
    const orderInfo = { orderType, table, orderNumber, totalPrice: 0, dishes: [] }

    setOrderID(orderNumber)
    createNewOrder(orderInfo)

    if (table) updateTableStatus(table)
    setToggleValue('dishes')
    setButtonDisabled(false)
  }

  const handleCreateOrder = () => {
    const [orderDB, orderActive] = getFormedOrder(newOrder)

    createOrder(orderDB)
    addActiveOrder(orderActive as OrderActiveType)
    clearNewOrderState()
    navigate(ROUTES.ORDERS)
  }

  const handleToggleChange = (value: string) => {
    setToggleValue(value)
  }

  useEffect(() => {
    if (activeOrder.active) {
      setToggleValue('dishes')
      setOrderID(activeOrder.orderNumber)
    }
  }, [activeOrder])

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
          orderItems={dishes}
          isPicker
          orderId={orderID}
          onClick={handleCreateOrder}
        />
      )}
    </Stack>
  )
}

export default OrderCreatorBar
