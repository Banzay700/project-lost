import { FC } from 'react'
import { Stack } from '@mui/material'

import { SidebarContentWrapper } from 'components/sidebar-content-wrapper'
import { Header } from 'components/header'
import { Outlet } from 'react-router-dom'
// add container MUI component here
const Layout: FC = () => {
  return (
    <Stack direction="column" minHeight="100vh">
      <Stack height="100%" maxHeight="76px" minHeight="64px">
        <Header />
      </Stack>
      <Stack direction="row" flex="1">
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
