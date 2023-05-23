import { FC } from 'react'
import { Stack } from '@mui/material'

import { ToggleMenu } from 'UI'
import { OrderCreatorFormValues } from 'types'
import { OrderCreatorForm } from './order-creator-form'
import { toggleMenuValues } from './orderCreatorBar.utils'

const OrderCreatorBar: FC = () => {
  const handleFormSubmit = (values: OrderCreatorFormValues) => {
    console.log(values)
  }
  const handleToggleChange = (value: string) => {
    console.log(value)
  }
  return (
    <Stack flex="1">
      <ToggleMenu menuItems={toggleMenuValues} onChange={handleToggleChange} />
      <OrderCreatorForm onSubmit={handleFormSubmit} />
    </Stack>
  )
}

export default OrderCreatorBar
