import { FC } from 'react'
import { Stack } from '@mui/material'

import { SidebarContentWrapper } from 'components/sidebar-content-wrapper'
import { Header } from 'components/header'
import { Outlet } from 'react-router-dom'
// add container MUI component here
const Layout: FC = () => {
  return (
    <Stack direction="column" height="100vh">
      <Stack height="7.42%">
        <Header />
      </Stack>
      <Stack direction="row" flex="1" height="92.58%">
        <Stack flex={1}>
          <Outlet />
        </Stack>
        <Stack direction="column" width="100%" maxWidth="360px" minWidth="289px">
          <SidebarContentWrapper />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Layout
