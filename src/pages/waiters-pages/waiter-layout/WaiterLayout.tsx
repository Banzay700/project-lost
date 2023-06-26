import { FC } from 'react'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Header, SidebarContentWrapper } from 'components'
import { useRootLocationPath } from 'hooks'
import { navData } from './WaiterLayout.utils'

const WaiterLayout: FC = () => {
  const { isProfileLocation, isReservationLocation } = useRootLocationPath()
  const isSidebar = !isProfileLocation && !isReservationLocation

  return (
    <>
      <Header dataLink={navData} routeLogoStyle="Food" />
      <Stack direction="row" flex="1" height="calc(100% - 76px)">
        <Stack flex={1} height="100%" width="100%" overflow="auto">
          <Outlet />
        </Stack>
        {isSidebar && <SidebarContentWrapper />}
      </Stack>
    </>
  )
}

export default WaiterLayout
