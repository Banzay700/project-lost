import { FC } from 'react'
import { Button } from 'UI'

interface FilterMenuItemProps {
  value: string
  label: string
  minWidth?: string
  onChange: (value: string) => void
  isSelected?: boolean
}

const FilterMenuItem: FC<FilterMenuItemProps> = ({
  value,
  label,
  minWidth,
  onChange,
  isSelected,
}) => {
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
      filterMenuStyle
      minWidth={minWidth}>
      {label}
    </Button>
  )
}

export default FilterMenuItem
