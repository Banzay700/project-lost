import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

interface OptionInfoProps {
  title: string
  value: string
  direction?: 'row' | 'column'
}

const OptionInfo: FC<OptionInfoProps> = ({ title, value, direction }) => {
  return (
    <Stack
      direction={direction || 'row'}
      sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h2" fontWeight={600}>
        {title}
      </Typography>
      <Typography color="primary">{value}</Typography>
    </Stack>
  )
}

export default OptionInfo
