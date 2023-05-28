import { useNavigate } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import { Stack } from '@mui/material'

import { OrderDetailsList } from 'components'
import { ToggleMenu } from 'UI'
import { useNewOrderReducer } from 'hooks'
import { OrderCreatorFormValues } from 'types'
import { ROUTES } from 'routes'
import { useCreateOrderMutation, useUpdateTableStatusMutation } from 'store/api'
import { OrderCreatorForm } from './order-creator-form'
import { getFormedOrder, toggleMenuValues, unique } from './orderCreatorBar.utils'

const OrderCreatorBar: FC = () => {
  const [toggleValue, setToggleValue] = useState<string>('orderInfo')
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [orderID, setOrderID] = useState(0)

  const [updateTableStatus] = useUpdateTableStatusMutation()
  const [createOrder] = useCreateOrderMutation()
  const { newOrder, dishes, createNewOrder } = useNewOrderReducer()

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
    const formedOrder = getFormedOrder(newOrder)

    createOrder(formedOrder)
    console.log(formedOrder)
    navigate(ROUTES.ORDERS)
  }

  const handleToggleChange = (value: string) => {
    setToggleValue(value)
  }

  useEffect(() => {
    // if (dishes.length) {
    //   console.log(dishes)
    //   setToggleValue('dishes')
    // }
  }, [dishes])
  console.log(dishes)
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
