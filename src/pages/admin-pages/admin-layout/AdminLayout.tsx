import { Box, Stack } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderAdmin, SidebarLeftAdmin } from 'components/index'

const AdminLayout: FC = () => {
  return (
    <Stack direction="column" height="100%" width="100%">
      <Box height="76px">
        <HeaderAdmin />
      </Box>
      <Stack direction="row" height="calc(100% - 76px)">
        <SidebarLeftAdmin />
        <Outlet />
      </Stack>
    </Stack>
  )
}

export default AdminLayout
