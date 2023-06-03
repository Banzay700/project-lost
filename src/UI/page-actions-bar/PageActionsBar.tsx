import { FC, ReactNode } from 'react'

import { Stack } from '@mui/material'

interface PageActionsBarProps {
  children: ReactNode
}

const PageActionsBar: FC<PageActionsBarProps> = ({ children }) => {
  return (
    <Stack
      sx={{
        p: '16px 24px',
        borderBottom: '1px solid #E4E4E4',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        minHeight: '71px',
        gap: '24px',
      }}>
      {children}
    </Stack>
  )
}

export default PageActionsBar
