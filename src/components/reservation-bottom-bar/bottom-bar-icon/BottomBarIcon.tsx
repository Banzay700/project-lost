import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

import { Icon } from 'assets'
import { BottomBarIconWrapper } from './BottomBarIcon.styled'

const BottomBarIcon: FC = () => {
  return (
    <BottomBarIconWrapper>
      <Stack sx={{ p: '12px', bgcolor: '#F8F9FD', borderRadius: '16px' }}>
        <Icon.Paper />
      </Stack>
      <Typography color="secondary" fontWeight={600}>
        Table:
      </Typography>
    </BottomBarIconWrapper>
  )
}

export default BottomBarIcon
