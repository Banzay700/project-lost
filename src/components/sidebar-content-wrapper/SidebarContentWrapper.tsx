import { FC } from 'react'
import { Stack } from '@mui/material'
import { OrderCreatorBar, OrderPaymentBar, OrderInfoBar } from 'components'
import { ROUTES } from 'routes'
import { useRootLocationPath } from 'hooks'

const SidebarContentWrapper: FC = () => {
  const location = useRootLocationPath()

  return (
    <Stack
      height="100%"
      direction="column"
      width="100%"
      maxWidth="360px"
      minWidth="289px"
      borderLeft="1px solid #E4E4E4">
      <Stack flex="1">
        {location === ROUTES.DISHES && <OrderCreatorBar />}
        {location === ROUTES.BILLS && <OrderPaymentBar />}
        {location === ROUTES.ORDERS && <OrderInfoBar />}
      </Stack>
    </Stack>
  )
}

export default SidebarContentWrapper
