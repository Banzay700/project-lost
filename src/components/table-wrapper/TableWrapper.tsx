import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

interface TableWrapperProps {
  children: ReactNode
}

const TableWrapper: FC<TableWrapperProps> = ({ children }) => {
  return <Box>{children}</Box>
}

export default TableWrapper
