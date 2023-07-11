import { FC } from 'react'
import ToggleButtonMUI from '@mui/material/ToggleButton'

interface ToggleButtonProps {
  value: string
  label: string
}

const ToggleButton: FC<ToggleButtonProps> = ({ value, label }) => {
  return (
    <ToggleButtonMUI value={value} color="primary">
      {label}
    </ToggleButtonMUI>
  )
}

export default ToggleButton
