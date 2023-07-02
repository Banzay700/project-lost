import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, SidebarContentWrapper } from 'components'
import { useRootLocationPath } from 'hooks'
import { navData } from './WaiterLayout.utils'
import { OutletWrapper, WaiterContentWrapper } from './WaiterLayout.styled'

const WaiterLayout: FC = () => {
  const { isProfileLocation, isReservationLocation } = useRootLocationPath()
  const isSidebar = !isProfileLocation && !isReservationLocation

  return (
    <>
      <Header dataLink={navData} routeLogoStyle="Food" />
      <WaiterContentWrapper>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        {isSidebar && <SidebarContentWrapper />}
      </WaiterContentWrapper>
    </>
  )
}

export default WaiterLayout
