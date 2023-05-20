import { FC } from 'react'
import { ToggleButton, Typography } from '@mui/material'
import s from './FilterMenuItem.module.scss'

interface DishFilterMenuItemProps {
  value: string
  label: string
  onChange: (event: any, newFormats: string[]) => void
  menuItems: string[]
}

const FilterMenuItem: FC<DishFilterMenuItemProps> = ({ value, label, onChange, menuItems }) => {
  const isSelected = !!menuItems.find((item) => item === value)
  return (
    <ToggleButton
      value={value}
      color="primary"
      className={s.toggleButton}
      selected={isSelected}
      onChange={onChange}>
      <Typography variant="h3" fontWeight={600}>
        {label}
      </Typography>
    </ToggleButton>
  )
}

export default FilterMenuItem
