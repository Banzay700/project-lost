import { FC, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import { SidebarLeftList } from 'components/sidebar-left-list'
import { useGetCategoriesQuery } from 'store/api/dish.api'
import { Outlet, useLocation, useMatch, useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes/routes.utils'

const DishesPage: FC = () => {
  const { data, isLoading } = useGetCategoriesQuery(null)
  if (isLoading) {
    return <div>loading...</div>
  }
  if (!data) {
    return <div>Server Error</div>
  }

  console.log()

  return (
    <Stack direction="row" height="100%">
      <Box borderRight="1px solid #e4e4e4">
        <SidebarLeftList sidebarItems={data} />
      </Box>
      <Outlet />
    </Stack>
  )
}

export default DishesPage
