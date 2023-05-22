import { FC, useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material'
import { DishesList, SearchFilterBar } from 'components'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  useGetDishesByCategoryAndFilterQuery,
  useGetSubCategoriesInCategoryQuery,
} from 'store/api/dish.api'
import { correctionRouteLinkForRequest } from 'utils/firstLetterUpperCase'
import { FilterMenuItemType } from 'types/FilterMenuItemType'
import { correctionName } from 'utils/correctionName'
import { ReturnChangePropsFilter } from 'types/ReturnChangePropsFilter'

const DishesPage: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search)
  const defaultSearch = searchParams.get('search')
  const defaultSubcategory = searchParams.get('category')
  const [subcategory, setSubcategory] = useState<string[]>(
    defaultSubcategory?.split(',') || ['all'],
  )
  const [search, setSearch] = useState(defaultSearch || '')
  const { data } = useGetSubCategoriesInCategoryQuery(
    correctionRouteLinkForRequest(location.pathname),
  )
  const { data: dishes } = useGetDishesByCategoryAndFilterQuery({
    category: correctionRouteLinkForRequest(location.pathname),
    subcategory: subcategory.some((item) => item === 'all') ? undefined : subcategory,
    search,
  })

  const filterMenu: FilterMenuItemType[] | undefined =
    data &&
    data.map((item) => ({
      label: correctionName(item.title),
      value: item.title,
    }))

  const handleFilterProduct = ({ filterValue, titleValue }: ReturnChangePropsFilter) => {
    if (filterValue) {
      setSubcategory(filterValue)
    }

    if (titleValue) {
      setSearch(titleValue)
    } else {
      setSearch('')
    }
  }

  useEffect(() => {
    setSubcategory(defaultSubcategory?.split(',') || ['all'])
    setSearch(defaultSearch || '')
  }, [defaultSearch, defaultSubcategory, location.pathname])

  const searchParamsUrl = () => {
    if (subcategory) {
      searchParams.set('category', subcategory.join(','))
    }
    if (search) {
      searchParams.set('search', search)
    } else {
      searchParams.delete('search')
    }
    navigate(`?${searchParams.toString()}`)
  }

  useEffect(() => {
    searchParamsUrl()
  }, [subcategory, search])

  return (
    <Stack sx={{ width: '100%' }}>
      {filterMenu && (
        <SearchFilterBar
          subcategories={filterMenu}
          onChange={handleFilterProduct}
          defaultValueFilter={subcategory}
          defaultValueInput={search}
        />
      )}
      <Box sx={{ background: '#F8F9FD', height: '100%', overflowY: 'auto' }}>
        {dishes && <DishesList dishes={dishes} />}
      </Box>
    </Stack>
  )
}

export default DishesPage
