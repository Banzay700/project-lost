import { FC } from 'react'
import { Stack } from '@mui/material'
import { OrderCreatorBar, OrderPaymentBar, OrderInfoBar } from 'components'
import { ROUTES } from 'routes'
import { useRootLocationPath } from 'hooks'

const SidebarContentWrapper: FC = () => {
  const location = useRootLocationPath()

  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        borderLeft: '1px solid #e4e4e4',
        maxWidth: { xs: '289px', lg: '340px', xl: '360px' },
      }}>
      <Stack flex="1">
        {location === ROUTES.DISHES && <OrderCreatorBar />}
        {location === ROUTES.ORDERS && <OrderInfoBar />}
        {location === ROUTES.BILLS && <OrderPaymentBar />}
      </Stack>
    </Stack>
  )
}

export default SidebarContentWrapper
