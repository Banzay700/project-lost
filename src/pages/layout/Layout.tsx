import { FC } from 'react'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header, SidebarContentWrapper } from 'components'

const Layout: FC = () => {
  return (
    <Stack direction="column" height="100vh">
      <Stack height="7.42%">
        <Header />
      </Stack>
      <Stack direction="row" flex="1" height="92.58%">
        <Stack flex={1} height="100%">
          <Outlet />
        </Stack>
        <Stack
          height="100%"
          direction="column"
          width="100%"
          maxWidth="360px"
          minWidth="289px"
          borderLeft="1px solid #E4E4E4">
          <SidebarContentWrapper />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Layout
