import { useNavigate } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import { Stack } from '@mui/material'

import { OrderDetailsList } from 'components'
import { ToggleMenu } from 'UI'
import { useOrderReducer } from 'hooks'
import { ROUTES } from 'routes'
import { OrderCreatorFormReturnType } from 'types'
import { convertOrderData } from 'utils'
import {
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useUpdateTableStatusMutation,
} from 'store/api'
import { emptyOrderState } from 'store/reducers/reducers.utils'
import { OrderCreatorForm } from './order-creator-form'
import { toggleMenuValues, unique } from './orderCreatorBar.utils'

const OrderCreatorBar: FC = () => {
  const [toggleValue, setToggleValue] = useState<string>('orderInfo')
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const [updateTableStatus] = useUpdateTableStatusMutation()
  const [createOrder] = useCreateOrderMutation()
  const [updateOrder] = useUpdateOrderMutation()
  const { activeOrder, openNewOrder } = useOrderReducer()

  const navigate = useNavigate()

  const handleFormSubmit = ({ orderType, table }: OrderCreatorFormReturnType) => {
    const orderNumber = unique()
    const orderInfo = { ...emptyOrderState, orderType, table, orderNumber, status: 'open' as const }

    openNewOrder(orderInfo)

    if (table) updateTableStatus(table)
    setToggleValue('dishes')
    setButtonDisabled(false)
  }

  const handleCreateOrder = () => {
    const { orderDB, orderActive } = convertOrderData(activeOrder)

    createOrder(orderDB)
    updateOrder(orderDB)
    openNewOrder(orderActive)
    navigate(ROUTES.ORDERS)
  }

  const handleToggleChange = (value: string) => {
    setToggleValue(value)
  }

  useEffect(() => {
    if (activeOrder.storeStatus === 'update') {
      setToggleValue('dishes')
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
      {toggleValue === 'dishes' && <OrderDetailsList isPicker onClick={handleCreateOrder} />}
    </Stack>
  )
}

export default OrderCreatorBar
