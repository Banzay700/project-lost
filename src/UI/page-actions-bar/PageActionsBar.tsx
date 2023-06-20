import { FC, PropsWithChildren } from 'react'

import { Theme, useMediaQuery } from '@mui/material'
import { PageActionsBarWrapper } from './PageActionsBar.styled'

const PageActionsBar: FC<PropsWithChildren> = ({ children }) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(1024))

  return <PageActionsBarWrapper $isSmallScreen={isSmallScreen}>{children}</PageActionsBarWrapper>
}

export default PageActionsBar
