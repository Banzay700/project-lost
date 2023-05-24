import { FC } from 'react'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header, SidebarContentWrapper } from 'components'

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
        <Stack
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
