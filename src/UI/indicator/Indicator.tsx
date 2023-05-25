import { FC } from 'react'
import { Stack, Typography } from '@mui/material'
import { IconIndicator } from 'assets/icons'
import { IndicatorProps, initIndicatorContent } from './indicator.utils'

const Indicator: FC<IndicatorProps> = ({ type }) => {
  const indicator = initIndicatorContent(type)
  return (
    <Stack direction="row" alignItems="center" spacing="8px">
      <IconIndicator color={indicator.color} />
      <Typography variant="h3" component="p">
        {indicator.text}
      </Typography>
    </Stack>
  )
}

export default Indicator
