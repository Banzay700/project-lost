import { FC, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'

import { OrderDetailsList } from 'components'
import { ToggleMenu } from 'UI'
import { useOrderReducer, useOrderProcessingLogic, useUserReducer } from 'hooks'
import { DeliveryFormType, OrderCreatorFormReturnType } from 'types'
import {
  useCreateDeliveryMutation,
  useDeleteOrderMutation,
  useUpdateTableStatusMutation,
} from 'store/api'

import { formatDateTime } from 'utils'
import { OrderCreatorForm } from './order-creator-form'
import { toggleMenuValues, updateOrderState } from './orderCreatorBar.utils'
import DeliveryModals from './delivery-modals/DeliveryModals'

const OrderCreatorBar: FC = () => {
  const [toggleValue, setToggleValue] = useState<string>('orderInfo')
  const [isOpened, setIsOpened] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [deliveryForm, setDeliveryForm] = useState<DeliveryFormType>()
  const { activeOrder, openNewOrder } = useOrderReducer()
  const { userState } = useUserReducer()
  const [deleteOrder] = useDeleteOrderMutation()
  const [updateTableStatus] = useUpdateTableStatusMutation()
  const [createDelivery] = useCreateDeliveryMutation()
  const { createDeliveryOrder, createDineInOrder, createTakeAwayOrder } = useOrderProcessingLogic()

  const handleFormSubmit = ({ orderType, table }: OrderCreatorFormReturnType) => {
    const orderInfo = updateOrderState({ orderType, table, user: userState.id })

    if (table) updateTableStatus(table)

    openNewOrder(orderInfo)
    setToggleValue('dishes')
    setButtonDisabled(false)
  }

  const handleCreateOrder = async () => {
    // await orderProcessing(setToggleValue)

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
    setDeliveryForm(value)
    setIsOpened(false)
  }

  const handleOnConfirm = () => {
    if (activeOrder.id && deliveryForm) {
      const time = formatDateTime(new Date())
      createDelivery({ ...deliveryForm, order: activeOrder.id, time })
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
        deliveryForm={deliveryForm}
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
