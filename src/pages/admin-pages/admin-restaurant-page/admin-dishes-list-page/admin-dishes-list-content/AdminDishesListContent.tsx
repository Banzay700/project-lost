import { FC } from 'react'
import { Box, Pagination, Stack } from '@mui/material'
import { SearchFilterBar, Table } from 'components'
import { useParamsSearchFilter } from 'hooks'
import { useGetCategoriesQuery, useGetDishesByCategoryAndFilterQuery } from 'store/api'
import { FilterMenuItemType } from 'types'
import { correctionName } from 'utils'
import { dishesTableTitles } from './adminDishesListContent.utils'

interface AdminDishesListContentProps {
  onClickLine: (id: string) => void
  onClickAction: (id: string) => void
}

const AdminDishesListContent: FC<AdminDishesListContentProps> = ({
  onClickLine,
  onClickAction,
}) => {
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
  const categoriesValues: FilterMenuItemType[] | undefined =
    categories && categories.map(({ title }) => ({ value: title, label: correctionName(title) }))

  return (
    <>
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
            onClickAction={onClickAction}
            onClickLine={onClickLine}
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
    </>
  )
}

export default AdminDishesListContent
