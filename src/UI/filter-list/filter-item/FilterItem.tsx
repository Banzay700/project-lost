import { FC } from 'react'
import { ListItem } from '@mui/material'
import { Button } from 'UI/button'
import cn from 'classnames'
import s from './FilterItem.module.scss'

interface FilterItemProps {
  text: string
  setActiveItem: (text: string) => void
  activeItem: string
}

const FilterItem: FC<FilterItemProps> = ({ text, setActiveItem, activeItem }) => {
  const handleClick = () => {
    setActiveItem(text)
  }
  return (
    <ListItem className={s.itemWrapper}>
      <Button
        variant="outlined"
        size="small"
        onClick={handleClick}
        color="secondary"
        className={cn(s.item, activeItem === text && s.active)}>
        {text}
      </Button>
    </ListItem>
  )
}

export default FilterItem
