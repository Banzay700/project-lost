import { Box, Stack } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderAdmin, SidebarLeftAdmin } from 'components'

const AdminLayout: FC = () => {
  return (
    <>
      <Box height="76px">
        <HeaderAdmin />
      </Box>
      <Stack direction="row" height="calc(100% - 76px)">
        <SidebarLeftAdmin />
        <Outlet />
      </Stack>
    </>
  )
}

export default AdminLayout
