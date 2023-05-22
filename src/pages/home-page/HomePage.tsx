import { FC } from 'react'
import { SidebarLeftList } from 'components/sidebar-left-list'
import { Outlet, useLocation } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import { SidebarItemsType } from 'types/SidebarItemsType'

interface HomePageProps {
  categories: SidebarItemsType[]
}

const HomePage: FC<HomePageProps> = ({ categories }) => {
  return (
    <Stack direction="row" height="100%">
      <Box borderRight="1px solid #e4e4e4">
        <SidebarLeftList sidebarItems={categories} />
      </Box>
      <Outlet />
    </Stack>
  )
}

export default HomePage
