import { FC, useState } from 'react'
import { List } from '@mui/material'
import { FilterItem } from 'UI/filter-list/filter-item'
import s from './FilterList.module.scss'

interface FilterListProps {
  subcategory: string[]
}

const FilterList: FC<FilterListProps> = ({ subcategory }) => {
  const [activeItem, setActiveItem] = useState('All')

  return (
    <List className={s.list}>
      <FilterItem text="All" setActiveItem={setActiveItem} activeItem={activeItem} />
      {subcategory?.map((item) => (
        <FilterItem key={item} text={item} setActiveItem={setActiveItem} activeItem={activeItem} />
      ))}
    </List>
  )
}

export default FilterList
