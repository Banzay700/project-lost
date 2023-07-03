import { FC } from 'react'

import { SidebarLeftList } from 'components'
import { useGetCategoriesQuery } from 'store/api'
import { DishesPageContent } from './dishes-page-content'
import { DishesPageWrapper, SidebarWrapper } from './DishesPage.styled'

const DishesPage: FC = () => {
  const { data, isLoading } = useGetCategoriesQuery(null)

  return (
    <DishesPageWrapper>
      <SidebarWrapper>
        <SidebarLeftList sidebarItems={data} isLoading={isLoading} />
      </SidebarWrapper>
      <DishesPageContent />
    </DishesPageWrapper>
  )
}

export default DishesPage
