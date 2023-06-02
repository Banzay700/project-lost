import { FC } from 'react'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Header, SidebarContentWrapper } from 'components'
import { ROUTES } from 'routes'
import { useRootLocationPath } from 'hooks'

const WaiterLayout: FC = () => {
  const path = useRootLocationPath()
  const isSidebar = path !== ROUTES.PROFILE && path !== ROUTES.RESERVATION

  return (
    <Stack direction="column" height="100%">
      <Stack height="7.42%">
        <Header />
      </Stack>
      <Stack direction="row" flex="1" height="92.58%">
        <Stack flex={1} height="100%">
          <Outlet />
        </Stack>
        {isSidebar && <SidebarContentWrapper />}
      </Stack>
    </Stack>
  )
}

export default WaiterLayout
