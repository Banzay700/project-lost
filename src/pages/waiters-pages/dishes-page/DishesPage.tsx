import { FC } from 'react'
import { Box } from '@mui/material'
import { SidebarLeftList } from 'components'
import { FadeIn } from 'utils'
import { useGetCategoriesQuery } from 'store/api'
import { DishesPageContent } from './dishes-page-content'

const DishesPage: FC = () => {
  const { data, isLoading } = useGetCategoriesQuery(null)

  return (
    <FadeIn styles={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <Box borderRight="1px solid #e4e4e4" sx={{ height: '100%' }}>
        <SidebarLeftList sidebarItems={data} isLoading={isLoading} />
      </Box>
      <DishesPageContent />
    </FadeIn>
  )
}

export default DishesPage
