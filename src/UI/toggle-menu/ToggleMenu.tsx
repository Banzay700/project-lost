import { FC, useEffect, useState } from 'react'
import { Stack, Tabs } from '@mui/material'
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
    <Stack
      sx={{
        width: '100%',
        height: 70,
        maxHeight: 70,
        minHeight: 70,
        justifyContent: 'center',
        p: '12px 16px',
      }}>
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
    </Stack>
  )
}

export default ToggleMenu
