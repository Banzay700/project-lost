import { FC } from 'react'
import { Typography } from '@mui/material'

import { Icon } from 'assets'
import { initIndicatorContent } from './indicator.utils'
import { IndicatorWrapper } from './Indicator.styled'

export interface IndicatorProps {
  type: 'dineIn' | 'takeAway' | 'delivery' | 'available' | 'reserved' | 'overdue'
}

const Indicator: FC<IndicatorProps> = ({ type }) => {
  const indicator = initIndicatorContent(type)

  return (
    <IndicatorWrapper>
      <Icon.Indicator color={indicator.color} />
      <Typography variant="h3">{indicator.text}</Typography>
    </IndicatorWrapper>
  )
}

export default Indicator
