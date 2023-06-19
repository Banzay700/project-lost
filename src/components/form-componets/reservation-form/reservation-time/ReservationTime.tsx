import { FC } from 'react'
import { Typography, Stack } from '@mui/material'

import { Input } from 'UI'

interface ReservationTimeProps {
  label: string
}

const ReservationTime: FC<ReservationTimeProps> = (props) => {
  const { label } = props

  return (
    <Stack sx={{ gap: '12px', marginTop: '12px' }}>
      <Typography variant="h3" component="p">
        {label}
      </Typography>
      <Stack direction="row" justifyContent="space-between" gap="22px">
        <Input type="number" placeholder="Hours" name="hours" label="Hours" />
        <Input type="number" placeholder="Minutes" name="minutes" label="Minutes" />
      </Stack>
    </Stack>
  )
}

export default ReservationTime
