import { FC } from 'react'
import { Typography } from '@mui/material'

import { Icon } from 'assets/index'
import { BottomBarIconWrapper, IconContainer } from './BottomBarIcon.styled'

const BottomBarIcon: FC = () => {
  return (
    <BottomBarIconWrapper>
      <IconContainer>
        <Icon.Paper />
      </IconContainer>
      <Typography color="secondary" fontWeight={600}>
        Selected Table:
      </Typography>
    </BottomBarIconWrapper>
  )
}

export default BottomBarIcon
