import { FC, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderDetailsList } from 'components'
import { ToggleMenu } from 'UI'
import { useOrderReducer, useOrderProcessingLogic, useUserReducer } from 'hooks'
import { OrderCreatorFormReturnType } from 'types'
import { useUpdateTableStatusMutation } from 'store/api'

import { OrderCreatorForm } from './order-creator-form'
import { toggleMenuValues, updateOrderState } from './orderCreatorBar.utils'

const OrderCreatorBar: FC = () => {
  const [toggleValue, setToggleValue] = useState<string>('orderInfo')
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const { activeOrder, openNewOrder } = useOrderReducer()
  const { userState } = useUserReducer()
  const [updateTableStatus] = useUpdateTableStatusMutation()
  const orderProcessing = useOrderProcessingLogic()

  const handleFormSubmit = ({ orderType, table }: OrderCreatorFormReturnType) => {
    const orderInfo = updateOrderState({ orderType, table, user: userState.id })

    if (table) updateTableStatus(table)

    openNewOrder(orderInfo)
    setToggleValue('dishes')
    setButtonDisabled(false)
  }

  const handleCreateOrder = async () => {
    await orderProcessing(setToggleValue)
  }

  const handleToggleChange = (value: string) => setToggleValue(value)

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
      <Box sx={{ height: 'calc(100% - 70px)' }}>
        {toggleValue === 'orderInfo' && <OrderCreatorForm onSubmit={handleFormSubmit} />}
        {toggleValue === 'dishes' && <OrderDetailsList onClick={handleCreateOrder} />}
      </Box>
    </Stack>
  )
}

export default OrderCreatorBar
