import { FC } from 'react'
import { Typography } from '@mui/material'
import { IndicatorItemType } from 'types/ComponentsItemType/IndicatorItemType'
import { initIndicatorContent } from './indicator.utils'
import { IndicatorIcon, IndicatorWrapper } from './Indicator.styled'

const Indicator: FC<IndicatorItemType> = ({ type, label }) => {
  const indicator = initIndicatorContent(type)

  return (
    <IndicatorWrapper>
      <IndicatorIcon type={indicator} />
      <Typography variant="h3">{label}</Typography>
    </IndicatorWrapper>
  )
}

export default Indicator
