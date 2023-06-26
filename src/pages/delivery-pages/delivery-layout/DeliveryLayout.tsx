import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { DeliveryWrapper, Header, SidebarDeliveryInfo } from 'components'
import { navData } from './deliveryLayout.utils'
import { useScreenTracking } from 'hooks/useScreenTracking'
import { OrderDetailsItemType } from 'types/ComponentsItemType'
import { Stack } from '@mui/material'
const mok2: OrderDetailsItemType[] = [
  {
    id: 'test',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test2',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test3',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test4',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test5',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
  {
    id: 'test6',
    title: 'test',
    total: 12,
    src: 'test',
    amount: 12,
  },
]
const DeliveryLayout: FC = () => {
  const { isMobileScreen } = useScreenTracking()

  return (
    <>
      <Header dataLink={navData} route="Delivery" />
      <DeliveryWrapper direction="row">
        <Stack flex={1} height="100%" width="100%" overflow="auto">
          <Outlet />
        </Stack>
        {!isMobileScreen && <SidebarDeliveryInfo orderDetail={mok2} orderNumber={12312} />}
      </DeliveryWrapper>
    </>
  )
}

export default DeliveryLayout
