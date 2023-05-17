import { FC } from 'react'
import { Search } from 'UI/search'
import { FilterList } from 'UI/filter-list'
import s from './FilterSearch.module.scss'

interface FilterSearchProps {}

const subCategories = ['pizza', 'coffee', 'burger', 'sushi']

const FilterSearch: FC<FilterSearchProps> = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.search}>
        <Search />
      </div>
      <div className={s.filter}>
        <FilterList subcategory={subCategories} />
      </div>
    </div>
  )
}

export default FilterSearch
