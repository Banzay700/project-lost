import { FC } from 'react'
import { Stack } from '@mui/material'
import { OrderCreatorBar, OrderPaymentBar, OrderInfoBar } from 'components'
import { useRootLocationPath } from 'hooks'

const SidebarContentWrapper: FC = () => {
  const { isHomeLocation, isOrdersLocation, isBillsLocation } = useRootLocationPath()

  return (
    <Stack
      sx={{
        height: '100%',
        width: '100%',
        borderLeft: '1px solid #e4e4e4',
        maxWidth: { xs: '289px', lg: '340px', xl: '360px' },
      }}>
      <Stack flex="1">
        {isHomeLocation && <OrderCreatorBar />}
        {isOrdersLocation && <OrderInfoBar />}
        {isBillsLocation && <OrderPaymentBar />}
      </Stack>
    </Stack>
  )
}

export default SidebarContentWrapper
