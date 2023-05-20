import { FC } from 'react'
// import { Search } from 'UI/search-input'
// import { FilterList } from 'UI/filter-list'
import s from './SearchFilterBar.module.scss'

interface SearchFilterBarProps {
  subcategories: string[]
}
// TODO на рефакторинг

const SearchFilterBar: FC<SearchFilterBarProps> = ({ subcategories }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.search}>{/*<Search />*/}</div>
      <div className={s.filter}>{/*<FilterList subcategory={subcategories} />*/}</div>
    </div>
  )
}

export default SearchFilterBar
