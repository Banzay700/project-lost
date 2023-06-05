import { FC, ReactNode } from 'react'
import { InputAdornment } from '@mui/material'

interface IconWrapperProps {
  children: ReactNode
}

const IconWrapper: FC<IconWrapperProps> = ({ children }) => {
  return <InputAdornment position="start">{children}</InputAdornment>
}

export default IconWrapper
