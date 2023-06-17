import { FC } from 'react'
import { Button } from 'UI'

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
    <Button
      variantText="h3"
      fontWeight={400}
      color={isSelected ? 'primary' : 'secondary'}
      onClick={handleClick}
      size="small"
      variant="outlined"
      filterMenuStyle>
      {label}
    </Button>
  )
}

export default FilterMenuItem
