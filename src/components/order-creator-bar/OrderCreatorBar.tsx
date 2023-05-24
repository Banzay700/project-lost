import { FC } from 'react'
import { Stack } from '@mui/material'

import { ToggleMenu } from 'UI'
import { OrderCreatorFormValues } from 'types'
import { useNewOrderReducer } from 'hooks'
import { useUpdateTableStatusMutation } from 'store/api'
import { OrderCreatorForm } from './order-creator-form'
import { toggleMenuValues } from './orderCreatorBar.utils'

const OrderCreatorBar: FC = () => {
  const { createNewOrder } = useNewOrderReducer()
  const [updateTableStatus] = useUpdateTableStatusMutation()

  const handleFormSubmit = ({ orderType, table }: OrderCreatorFormValues) => {
    const orderInfo = { orderNumber: 0, dishes: [], orderType, table }

    createNewOrder(orderInfo)
    if (table) updateTableStatus(table)
  }

  const handleToggleChange = (value: string) => {}

  return (
    <Stack flex="1">
      <ToggleMenu menuItems={toggleMenuValues} onChange={handleToggleChange} />
      <OrderCreatorForm onSubmit={handleFormSubmit} />
    </Stack>
  )
}

export default OrderCreatorBar
