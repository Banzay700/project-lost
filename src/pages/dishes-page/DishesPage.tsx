import { FC } from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { SidebarLeftList } from 'components'
import { useGetCategoriesQuery } from 'store/api/dish.api'
import { FadeIn } from 'utils'

const DishesPage: FC = () => {
  const { data, isLoading } = useGetCategoriesQuery(null)
  if (isLoading) {
    return <div>loading...</div>
  }
  if (!data) {
    return <div>Server Error</div>
  }

  return (
    <FadeIn styles={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <Box borderRight="1px solid #e4e4e4">
        <SidebarLeftList sidebarItems={data} />
      </Box>
      <Outlet />
    </FadeIn>
  )
}

export default DishesPage
