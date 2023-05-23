import { FC } from 'react'
import { Button } from 'UI/button'
import s from './FilterMenuItem.module.scss'

interface DishFilterMenuItemProps {
  value: string
  label: string
  onChange: (value: string) => void
  isSelected?: boolean
}

const FilterMenuItem: FC<DishFilterMenuItemProps> = ({ value, label, onChange, isSelected }) => {
  const handleClick = () => {
    onChange(value)
  }
  return (
    <Button
      variantText="h3"
      fontWeight={400}
      color={isSelected ? 'primary' : 'secondary'}
      className={s.toggleButton}
      onClick={handleClick}
      size="default"
      variant="outlined">
      {label}
    </Button>
  )
}

export default FilterMenuItem
