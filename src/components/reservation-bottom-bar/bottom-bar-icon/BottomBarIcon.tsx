import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

import { IconPaper } from 'assets/index'

const BottomBarIcon: FC = () => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        paddingRight: '15px',
        alignItems: 'center',
        gap: '10px',
        borderRight: '1px solid #E4E4E4',
      }}>
      <Stack sx={{ p: '12px', bgcolor: '#F8F9FD', borderRadius: '16px' }}>
        <IconPaper />
      </Stack>
      <Typography color="secondary" fontWeight={600}>
        Table:
      </Typography>
    </Stack>
  )
}

export default BottomBarIcon
