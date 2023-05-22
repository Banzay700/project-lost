import { FC } from 'react'
import { Stack } from '@mui/material'
import { OrderCreatorBar, OrderPaymentBar } from 'components'
import { HOME_LOCATION, BILLS_LOCATION } from './sidebarContentWrapper.utils'
import s from './SidebarContentWrapper.module.scss'

const SidebarContentWrapper: FC = () => {
  // get from location (useLocation)
  let location = HOME_LOCATION

  return (
    <Stack flex="1">
      {location === HOME_LOCATION && <OrderCreatorBar />}
      {location === BILLS_LOCATION && <OrderPaymentBar orderId="43" totalAmount={434} />}
    </Stack>
  )
}

export default SidebarContentWrapper
