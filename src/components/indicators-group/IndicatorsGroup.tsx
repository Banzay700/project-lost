import { FC } from 'react'
import { Stack } from '@mui/material'

import { Indicator } from 'UI'
import { IndicatorItemType } from 'types'
import { IndicatorGroupWrapper } from './IndicatorGroup.styled'

interface IndicatorGroupProps {
  indicatorData?: IndicatorItemType[]
}

const IndicatorsGroup: FC<IndicatorGroupProps> = ({ indicatorData }) => {
  return (
    <IndicatorGroupWrapper>
      {indicatorData?.map((item) => (
        <Indicator key={item.label} type={item.type} label={item.label} />
      ))}
    </IndicatorGroupWrapper>
  )
}

export default IndicatorsGroup
