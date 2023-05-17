import { FC, ReactNode } from 'react'
import { InputAdornment } from '@mui/material'

interface IconWrapperProps {
  children: ReactNode
}

const IconWrapper: FC<IconWrapperProps> = ({ children }) => {
  return (
    <div>
      <InputAdornment position="start">{children}</InputAdornment>
    </div>
  )
}

export default IconWrapper
