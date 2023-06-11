import { FC, ReactNode } from 'react'

import { Stack, Theme, useMediaQuery } from '@mui/material'

interface PageActionsBarProps {
  children: ReactNode
}

const PageActionsBar: FC<PageActionsBarProps> = ({ children }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(890))

  return (
    <Stack
      sx={{
        p: '16px 24px',
        borderBottom: '1px solid #E4E4E4',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: isSmallScreen ? 'start' : 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}>
      {children}
    </Stack>
  )
}

export default PageActionsBar
