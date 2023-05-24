import { FC } from 'react'
import { Stack } from '@mui/material'
import { OrderCreatorBar, OrderPaymentBar } from 'components'
import { ROUTES } from 'routes'

import s from './SidebarContentWrapper.module.scss'

import { useRootLocationPath } from 'hooks'

const SidebarContentWrapper: FC = () => {
  const location = useRootLocationPath()

  return (
    <Stack flex="1">
      {location === ROUTES.DISHES && <OrderCreatorBar />}
      {location === ROUTES.BILLS && <OrderPaymentBar orderId="43" totalAmount={434} />}
    </Stack>
  )
}

export default SidebarContentWrapper
