import { FC } from 'react'
import { Stack } from '@mui/material'
import { OrderCreatorBar, OrderPaymentBar, OrderInfoBar } from 'components'
import { useRootLocationPath } from 'hooks'
import { SidebarContentContainer } from './SidebarContentWrapper.styled'

const SidebarContentWrapper: FC = () => {
  const { isHomeLocation, isOrdersLocation, isBillsLocation } = useRootLocationPath()

  return (
    <SidebarContentContainer>
      <Stack flex="1">
        {isHomeLocation && <OrderCreatorBar />}
        {isOrdersLocation && <OrderInfoBar />}
        {isBillsLocation && <OrderPaymentBar />}
      </Stack>
    </SidebarContentContainer>
  )
}

export default SidebarContentWrapper
