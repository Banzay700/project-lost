import { Table } from 'components/table'
import { FC } from 'react'
import { useGetDishesByCategoryAndFilterQuery } from 'store/api'
import { SearchFilterBar } from 'components'
import { Box, Pagination, Stack } from '@mui/material'
import { useParamsSearchFilter } from 'hooks'
import { dishesTableTitles, filterItems } from './adminDishesListPage.utils'
import { useGetCategoriesQuery } from 'store/api/dish.api'
import { FilterMenuItemType } from 'types/ComponentsItemType'
import { correctionName } from 'utils/correctionName'

const AdminDishesListPage: FC = () => {
  const {
    params: category,
    search,
    page,
    handleFilterTitle,
    handleFilterCategory,
    handlePagination,
  } = useParamsSearchFilter('category')
  const { data: categories } = useGetCategoriesQuery(null)
  const { data, isLoading } = useGetDishesByCategoryAndFilterQuery({ category, page, search })
  const handleClickAction = (id: string) => {
    console.log(id)
  }

  const categoriesValues: FilterMenuItemType[] | undefined =
    categories && categories.map(({ title }) => ({ value: title, label: correctionName(title) }))
  return (
    <Stack sx={{ width: '100%', height: '100%', gap: '20px' }}>
      <Box sx={{ height: '90%' }}>
        {categoriesValues && (
          <SearchFilterBar
            subcategories={categoriesValues}
            changeCategory={handleFilterCategory}
            changeTitle={handleFilterTitle}
            defaultValueFilter={category?.split(',')}
            defaultValueInput={search || ''}
          />
        )}
        <Stack sx={{ height: '90%' }}>
          <Table
            data={data?.data}
            isLoading={isLoading}
            tableTitles={dishesTableTitles}
            tableType="dishes"
            onClickAction={handleClickAction}
          />
        </Stack>
      </Box>
      <Stack sx={{ alignItems: 'flex-end', marginRight: '50px', p: '20px' }}>
        {data && (
          <Pagination
            count={Math.ceil(data.totalCount / 8)}
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

export default AdminDishesListPage
