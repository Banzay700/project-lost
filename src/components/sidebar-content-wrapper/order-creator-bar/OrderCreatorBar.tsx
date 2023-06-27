import { FC, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderDetailsList, DeliveryModals } from 'components'
import { ToggleMenu } from 'UI'
import { useOrderReducer, useOrderProcessingLogic, useUserReducer } from 'hooks'
import { DeliveryFormType, OrderCreatorFormReturnType } from 'types'
import {
  useCreateDeliveryMutation,
  useDeleteOrderMutation,
  useUpdateTableStatusMutation,
} from 'store/api'

import { OrderCreatorForm } from './order-creator-form'
import { toggleMenuValues, updateOrderState, prepareDeliveryInfo } from './orderCreatorBar.utils'

const OrderCreatorBar: FC = () => {
  const [toggleValue, setToggleValue] = useState<string>('orderInfo')
  const [isOpened, setIsOpened] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [deliveryFormInfo, setDeliveryFormInfo] = useState<DeliveryFormType>()
  const { activeOrder, openNewOrder } = useOrderReducer()
  const { userState } = useUserReducer()
  const { createDeliveryOrder, createDineInOrder, createTakeAwayOrder } = useOrderProcessingLogic()

  const [deleteOrder] = useDeleteOrderMutation()
  const [updateTableStatus] = useUpdateTableStatusMutation()
  const [createDelivery] = useCreateDeliveryMutation()

  const handleFormSubmit = ({ orderType, table }: OrderCreatorFormReturnType) => {
    const orderInfo = updateOrderState({ orderType, table, user: userState.id })

    if (table) updateTableStatus(table)

    openNewOrder(orderInfo)
    setToggleValue('dishes')
    setButtonDisabled(false)
  }

  const handleCreateOrder = async () => {
    if (activeOrder.orderType === 'delivery') {
      await createDeliveryOrder()
      setIsOpened(true)
    } else if (activeOrder.orderType === 'dineIn') {
      await createDineInOrder(setToggleValue)
    } else {
      await createTakeAwayOrder()
    }
  }

  const handleToggleChange = (value: string) => setToggleValue(value)

  useEffect(() => {
    if (activeOrder.storeStatus === 'update') {
      setToggleValue('dishes')
    }
  }, [activeOrder])

  const handleClose = () => {
    if (activeOrder.id) {
      deleteOrder(activeOrder.id)
    }
    setIsOpened(false)
    setToggleValue('orderInfo')
    setButtonDisabled(true)
  }

  const handleOnSubmit = (value: DeliveryFormType) => {
    setDeliveryFormInfo(value)
    setIsOpened(false)
  }

  const handleOnConfirm = () => {
    if (activeOrder.id && deliveryFormInfo) {
      const deliveryInfo = prepareDeliveryInfo(activeOrder.id, deliveryFormInfo)

      createDelivery(deliveryInfo)
    }
    setToggleValue('orderInfo')
    setButtonDisabled(true)
  }

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
      <DeliveryModals
        deliveryFormInfo={deliveryFormInfo}
        activeOrder={activeOrder}
        onSubmit={handleOnSubmit}
        onConfirm={handleOnConfirm}
        onClose={handleClose}
        isOpened={isOpened}
      />
    </Stack>
  )
}

export default OrderCreatorBar
