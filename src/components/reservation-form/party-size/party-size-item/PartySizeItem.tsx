import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

interface PartySizeItemProps {
  number: number
  active: boolean
  onClick: () => void
}

const PartySizeItem: FC<PartySizeItemProps> = ({ number, active, onClick }) => {
  return (
    <Stack
      sx={{
        width: '64px',
        height: '64px',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        bgcolor: active ? '#FFF5EE' : 'transparent',
      }}
      onClick={onClick}>
      <Typography fontWeight={600} color={active ? 'primary' : 'secondary'}>
        {number}
      </Typography>
    </Stack>
  )
}

export default PartySizeItem
