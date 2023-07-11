import { FC } from 'react'
import { Typography } from '@mui/material'
import { ToggleMenuItemWrapper } from './ToggleMenuItem.styled'

interface ToggleMenuItemProps {
  label: string
  value: string
  selected: string
  onClick: (value: string) => void
  buttonDisabled?: boolean
}

const ToggleMenuItem: FC<ToggleMenuItemProps> = ({
  label,
  value,
  selected,
  buttonDisabled,
  onClick,
}) => {
  const isSelected = selected ? 'secondary' : 'text.primary'

  const handleChange = () => {
    onClick(value)
  }

  return (
    <ToggleMenuItemWrapper
      disabled={buttonDisabled}
      onClick={handleChange}
      label={
        <Typography variant="h3" component="p" color={isSelected}>
          {label}
        </Typography>
      }
      value={value}
      disableRipple
    />
  )
}

export default ToggleMenuItem
