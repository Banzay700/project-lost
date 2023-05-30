import { FC } from 'react'
import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header, SidebarContentWrapper } from 'components'
import { useRootLocationPath } from 'hooks'

const WaiterLayout: FC = () => {
  const path = useRootLocationPath()
  return (
    <Stack direction="column" height="100%">
      <Stack height="7.42%">
        <Header />
      </Stack>
      <Stack direction="row" flex="1" height="92.58%">
        <Stack flex={1} height="100%">
          <Outlet />
        </Stack>
        {path !== 'profile' && (
          <Stack
            height="100%"
            direction="column"
            width="100%"
            maxWidth="360px"
            minWidth="289px"
            borderLeft="1px solid #E4E4E4">
            <SidebarContentWrapper />
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default WaiterLayout
