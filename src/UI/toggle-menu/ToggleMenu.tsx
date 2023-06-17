import { FC, useEffect, useState } from 'react'
import { ToggleMenuItemType } from 'types'
import { ToggleMenuItem } from './toggle-menu-item'
import { TabsWrapper, ToggleMenuWrapper } from './ToggleMenu.styled'

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
    <ToggleMenuWrapper>
      <TabsWrapper value={selectedItem} centered textColor="secondary">
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
      </TabsWrapper>
    </ToggleMenuWrapper>
  )
}

export default ToggleMenu
