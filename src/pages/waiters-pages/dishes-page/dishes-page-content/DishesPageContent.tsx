import { FC } from 'react'
import { Pagination, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'

import { DishesList, SearchFilterBar } from 'components'
import { useGetDishesByCategoryAndFilterQuery, useGetSubCategoriesInCategoryQuery } from 'store/api'
import { firstLetterUpperCase, correctionName } from 'utils'
import { FilterMenuItemType } from 'types'
import { useParamsSearchFilter, useRelocateDefaultLocation } from 'hooks'

interface DishesPageContentProps {
  defaultCategory: string
}

const DishesPageContent: FC<DishesPageContentProps> = ({ defaultCategory }) => {
  const { category } = useParams()
  useRelocateDefaultLocation({
    isParams: category,
    relocateTo: defaultCategory,
  })

  const {
    params: subCategory,
    search,
    page,
    handleFilterTitle,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('category')

  const { data } = useGetSubCategoriesInCategoryQuery(
    firstLetterUpperCase(category || defaultCategory),
  )
  const { data: dishes } = useGetDishesByCategoryAndFilterQuery({
    category: subCategory || firstLetterUpperCase(category || defaultCategory),
    search,
    page,
  })

  const filterMenu: FilterMenuItemType[] | undefined =
    data &&
    data.map((item) => ({
      label: correctionName(item.title),
      value: item.title,
    }))

  return (
    <Stack sx={{ width: '100%', height: '100%', background: '#F8F9FD' }}>
      {filterMenu && (
        <SearchFilterBar
          subcategories={filterMenu}
          changeCategory={handleFilterCategory}
          changeTitle={handleFilterTitle}
          defaultValueFilter={subCategory?.split(',')}
          defaultValueInput={search || ''}
        />
      )}
      {dishes && <DishesList dishes={dishes.data} />}
      <Stack sx={{ alignItems: 'center', marginRight: '50px', p: '20px' }}>
        {dishes && (
          <Pagination
            count={Math.ceil(dishes.totalCount / 8)}
            variant="text"
            shape="rounded"
            color="primary"
            onChange={handlePagination}
            page={Number(page)}
          />
        )}
      </Stack>
    </Stack>
  )
}

export default DishesPageContent
