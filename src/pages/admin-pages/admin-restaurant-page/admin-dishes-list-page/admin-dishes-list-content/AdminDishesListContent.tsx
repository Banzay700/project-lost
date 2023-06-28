import { FC } from 'react'
import { SearchFilterBar, TableDishLine } from 'components'
import { useParamsSearchFilter } from 'hooks'
import { useGetCategoriesQuery, useGetDishesQuery } from 'store/api'
import { Table, Pagination } from 'UI'
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
  const { data, isFetching } = useGetDishesQuery({
    category,
    page,
    search,
    status: 'all',
    limit: 10,
  })
  const categoriesValues: FilterMenuItemType[] | undefined =
    categories && categories.map(({ title }) => ({ value: title, label: correctionName(title) }))

  return (
    <>
      <SearchFilterBar
        subcategories={categoriesValues}
        changeCategory={handleFilterCategory}
        changeTitle={handleFilterTitle}
        defaultValueFilter={category?.split(',')}
        defaultValueInput={search || ''}
      />

      <Table tableMinWidth="660px" isLoading={isFetching} tableTitles={dishesTableTitles}>
        {!isFetching &&
          data?.data.map((dish) => (
            <TableDishLine
              key={dish.id}
              dish={dish}
              onClickAction={onClickAction}
              onClickLine={onClickLine}
            />
          ))}
      </Table>
      {data && (
        <Pagination
          disabled={data.totalCount > 10}
          marginRight="30px"
          count={Math.ceil(data.totalCount / 10)}
          onChange={handlePagination}
          page={Number(page)}
        />
      )}
    </>
  )
}

export default AdminDishesListContent
