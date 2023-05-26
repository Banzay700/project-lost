import { FC, useEffect, useState } from 'react'
import { Box, Tabs } from '@mui/material'
import { ToggleMenuItemType } from 'types'
import { ToggleMenuItem } from './toggle-menu-item'
import s from './ToggleMenu.module.scss'

interface ToggleMenuProps {
  menuItems: ToggleMenuItemType[]
  onChange: (value: string) => void
  defaultValue: string
  buttonDisabled?: boolean
}

const ToggleMenu: FC<ToggleMenuProps> = ({ menuItems, onChange, defaultValue, buttonDisabled }) => {
  const [selectedItem, setSelectedItem] = useState<string>(defaultValue)

  const handleChangeMenuItem = (value: string) => {
    setSelectedItem(value)
    onChange(value)
  }

  useEffect(() => {
    setSelectedItem(defaultValue)
  }, [defaultValue])

  return (
    <Box sx={{ padding: '7px 15px' }}>
      <Tabs value={selectedItem} className={s.wrapper} centered textColor="secondary">
        {menuItems.map(({ label, value }) => (
          <ToggleMenuItem
            buttonDisabled={buttonDisabled}
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
