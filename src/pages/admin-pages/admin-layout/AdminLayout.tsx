import { Box, Stack } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderAdmin, SidebarLeftAdmin } from 'components/index'

const AdminLayout: FC = () => {
  return (
    <Stack direction="column" height="100%">
      <Box height="7.42%">
        <HeaderAdmin />
      </Box>
      <Stack height="92.58%" direction="row">
        <SidebarLeftAdmin />
        <Outlet />
      </Stack>
    </Stack>
  )
}

export default AdminLayout
