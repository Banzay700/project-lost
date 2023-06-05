import { FC, useEffect } from 'react'
import { Stack } from '@mui/material'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { DishesList, SearchFilterBar } from 'components/index'
import { useGetDishesByCategoryAndFilterQuery, useGetSubCategoriesInCategoryQuery } from 'store/api'
import { firstLetterUpperCase, correctionName } from 'utils/index'
import { FilterMenuItemType } from 'types'

interface DishesPageContentProps {
  defaultCategory: string
}

const DishesPageContent: FC<DishesPageContentProps> = ({ defaultCategory }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { category } = useParams()
  const searchParams = new URLSearchParams(location.search)
  const search = searchParams.get('search')
  const subcategory = searchParams.get('category')

  useEffect(() => {
    if (!category) {
      navigate(defaultCategory)
    }
  }, [category, defaultCategory, navigate])

  const { data } = useGetSubCategoriesInCategoryQuery(
    firstLetterUpperCase(category || defaultCategory),
  )
  const { data: dishes } = useGetDishesByCategoryAndFilterQuery({
    category: firstLetterUpperCase(subcategory || category || defaultCategory),
    // subcategory,
    search,
  })

  const filterMenu: FilterMenuItemType[] | undefined =
    data &&
    data.map((item) => ({
      label: correctionName(item.title),
      value: item.title,
    }))

  const handleFilterCategory = (filterValue: string[]) => {
    if (!filterValue.some((item) => item === 'all')) {
      searchParams.set('category', filterValue.join(','))
      navigate(`?${searchParams.toString()}`)
    } else {
      searchParams.delete('category')
      navigate(`?${searchParams.toString()}`)
    }
  }

  const handleFilterTitle = (titleValue: string) => {
    if (titleValue) {
      searchParams.set('search', titleValue)
      navigate(`?${searchParams.toString()}`)
    } else {
      searchParams.delete('search')
      navigate(`?${searchParams.toString()}`)
    }
  }

  return (
    <Stack sx={{ width: '100%', height: '100%' }}>
      {filterMenu && (
        <SearchFilterBar
          subcategories={filterMenu}
          changeCategory={handleFilterCategory}
          changeTitle={handleFilterTitle}
          defaultValueFilter={subcategory?.split(',')}
          defaultValueInput={search || ''}
        />
      )}
      {dishes && <DishesList dishes={dishes.data} />}
    </Stack>
  )
}

export default DishesPageContent
