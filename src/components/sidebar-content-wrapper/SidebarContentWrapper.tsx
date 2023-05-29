import { FC } from 'react'
import { Stack } from '@mui/material'
import { OrderCreatorBar, OrderPaymentBar, OrderInfoBar } from 'components'
import { ROUTES } from 'routes'
import { useRootLocationPath } from 'hooks'

const SidebarContentWrapper: FC = () => {
  const location = useRootLocationPath()

  return (
    <Stack flex="1">
      {location === ROUTES.DISHES && <OrderCreatorBar />}
      {location === ROUTES.BILLS && <OrderPaymentBar orderNumber={43} totalAmount={434} />}
      {location === ROUTES.ORDERS && <OrderInfoBar />}
    </Stack>
  )
}

export default SidebarContentWrapper
