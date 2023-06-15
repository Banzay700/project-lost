import { FC } from 'react'
import { FilterMenuItemWrapper } from './FilterMenuItem.styled'

interface FilterMenuItemProps {
  value: string
  label: string
  onChange: (value: string) => void
  isSelected?: boolean
}

const FilterMenuItem: FC<FilterMenuItemProps> = ({ value, label, onChange, isSelected }) => {
  const handleClick = () => {
    onChange(value)
  }
  return (
    <FilterMenuItemWrapper
      variantText="h3"
      fontWeight={400}
      color={isSelected ? 'primary' : 'secondary'}
      onClick={handleClick}
      size="medium"
      variant="outlined">
      {label}
    </FilterMenuItemWrapper>
  )
}

export default FilterMenuItem
