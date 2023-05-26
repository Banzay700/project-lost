import { FC, useState } from 'react'
import { Box, Tabs } from '@mui/material'
import { ToggleMenuItemType, ToggleMenuValuesType } from 'types'
import { ToggleMenuItem } from './toggle-menu-item'
import s from './ToggleMenu.module.scss'

interface ToggleMenuProps {
  menuItems: ToggleMenuItemType[]
  onChange: (value: string) => void
  toggleValue: ToggleMenuValuesType
}

const ToggleMenu: FC<ToggleMenuProps> = ({ menuItems, onChange, toggleValue }) => {
  const [selectedItem, setSelectedItem] = useState<string>(toggleValue)

  const handleChangeMenuItem = (value: string) => {
    setSelectedItem(value)
    onChange(value)
  }

  return (
    <Box sx={{ padding: '7px 15px' }}>
      <Tabs value={selectedItem} className={s.wrapper} centered textColor="secondary">
        {menuItems.map(({ label, value }) => (
          <ToggleMenuItem
            key={value}
            label={label}
            value={value}
            selected={selectedItem}
            onClick={handleChangeMenuItem}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default ToggleMenu
