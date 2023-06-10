import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

import { Icon } from 'assets'
import { initIndicatorContent } from './indicator.utils'

export interface IndicatorProps {
  type: 'dineIn' | 'takeAway' | 'delivery' | 'available' | 'reserved'
}

const Indicator: FC<IndicatorProps> = ({ type }) => {
  const indicator = initIndicatorContent(type)

  return (
    <Stack direction="row" alignItems="center" spacing="8px" sx={{ userSelect: 'none' }}>
      <Icon.Indicator color={indicator.color} />
      <Typography variant="h3" component="p">
        {indicator.text}
      </Typography>
    </Stack>
  )
}

export default Indicator
