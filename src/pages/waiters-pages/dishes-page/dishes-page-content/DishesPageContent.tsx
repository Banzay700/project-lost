import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { DishesList, SearchFilterBar } from 'components'
import { useGetDishesQuery, useGetSubCategoriesInCategoryQuery } from 'store/api'
import { firstLetterUpperCase } from 'utils'
import { useParamsSearchFilter } from 'hooks'
import { Pagination } from 'UI'
import { ContentWrapper } from './DishesPageContent.styled'
import { generateFilterItems, DISHES_PER_PAGE } from './DishesPageContent.utils'

const DishesPageContent: FC = () => {
  const { category } = useParams()
  const formattedCategory = firstLetterUpperCase(category || 'pizza')
  const {
    params: subCategory,
    search,
    page,
    handleFilterTitle,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('category')

  const { data } = useGetSubCategoriesInCategoryQuery(formattedCategory)
  const { data: dishes, isFetching } = useGetDishesQuery({
    category: subCategory || formattedCategory,
    search,
    page,
    limit: DISHES_PER_PAGE,
  })

  const filterMenuItems = generateFilterItems(data)

  return (
    <ContentWrapper>
      <SearchFilterBar
        subcategories={filterMenuItems}
        changeCategory={handleFilterCategory}
        changeTitle={handleFilterTitle}
        defaultValueFilter={subCategory?.split(',')}
        defaultValueInput={search || ''}
      />
      <DishesList dishes={dishes?.data} isLoading={isFetching} />
      {dishes && (
        <Pagination
          disabled={dishes.totalCount > DISHES_PER_PAGE}
          marginRight="30px"
          count={Math.ceil(dishes.totalCount / DISHES_PER_PAGE)}
          onChange={handlePagination}
          page={Number(page)}
        />
      )}
    </ContentWrapper>
  )
}

export default DishesPageContent
