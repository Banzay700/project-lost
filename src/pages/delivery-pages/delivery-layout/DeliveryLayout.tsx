import { FC } from 'react'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { AdaptiveHeaderWrapper, Header, SidebarDeliveryInfo } from 'components'
import { useScreenTracking, useRootLocationPath } from 'hooks'
import { OrderDetailsItemType } from 'types'
import { navData } from './deliveryLayout.utils'

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
  const { isProfileLocation } = useRootLocationPath()

  return (
    <>
      <Header dataLink={navData} routeLogoStyle="Delivery" />
      <AdaptiveHeaderWrapper direction="row">
        <Stack flex={1} height="100%" width="100%" overflow="auto">
          <Outlet />
        </Stack>
        {/* {!isMobileScreen && !isProfileLocation && ( */}
        {/*  <SidebarDeliveryInfo orderDetail={mok2} orderNumber={12312} /> */}
        {/* )} */}
      </AdaptiveHeaderWrapper>
    </>
  )
}

export default DeliveryLayout
