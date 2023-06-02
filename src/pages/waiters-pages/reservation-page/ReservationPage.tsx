import { FC } from 'react'

import { Stack } from '@mui/material'
import { IndicatorsGroup } from 'components/indicators-group'

const ReservationPage: FC = () => {
  return (
    <div>
      <Stack
        sx={{
          p: '16px 24px',
          borderBottom: '1px solid #E4E4E4',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: '24px',
        }}>
        <IndicatorsGroup />
      </Stack>
      <div>ReservationPage</div>
    </div>
  )
}

export default ReservationPage
