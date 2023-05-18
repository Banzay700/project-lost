import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { List } from '@mui/material'
import { FilterItem } from './filter-item'
import s from './FilterList.module.scss'

interface FilterListProps {
  subcategory: string[]
}

const FilterList: FC<FilterListProps> = ({ subcategory }) => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const activeSubCategory = queryParams.get('subcategory') || 'All'
  const [activeItem, setActiveItem] = useState(activeSubCategory)
  const navigate = useNavigate()

  const handleSetFilter = (filter: string) => {
    setActiveItem(filter)
    queryParams.set('subcategory', filter === 'All' ? '' : filter)
    navigate(`?${queryParams.toString()}`)
  }

  return (
    <List className={s.list}>
      <FilterItem text="All" setActiveItem={handleSetFilter} activeItem={activeItem} />
      {subcategory?.map((item) => (
        <FilterItem
          key={item}
          text={item}
          setActiveItem={handleSetFilter}
          activeItem={activeItem}
        />
      ))}
    </List>
  )
}

export default FilterList
