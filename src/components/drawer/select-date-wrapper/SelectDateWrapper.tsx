import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

interface DrawerSelectDateProps {
  children: ReactNode
}

const SelectDateWrapper: FC<DrawerSelectDateProps> = ({ children }) => {
  return <Box sx={{ p: '24px', boxShadow: '0px 2px 24px rgba(25, 25, 28, 0.08)' }}>{children}</Box>
}

export default SelectDateWrapper
