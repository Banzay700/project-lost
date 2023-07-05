import { FC } from 'react'
import { Typography } from '@mui/material'

import { InfoTag } from 'UI'
import { Icon } from 'assets'
import { StatisticLabelsResponseType } from 'types'
import { LabelWrapper, PercentageWrapper, DecorLine, TitleLineWrapper } from './LabelItem.styled'
import { prepareStatisticLabelData } from './LabelItem.utils'

interface LabelItemProps {
  labelInfo: StatisticLabelsResponseType
}

const LabelItem: FC<LabelItemProps> = ({ labelInfo }) => {
  const { title, value, percentage, period, compareString } = prepareStatisticLabelData(labelInfo)
  const isPositivePercentage = labelInfo.percentage > 0
  return (
    <LabelWrapper>
      <DecorLine />
      <TitleLineWrapper>
        <Typography variant="h2" fontWeight={500}>
          {title}
        </Typography>
        <InfoTag label={period} type="primary" size="small" />
      </TitleLineWrapper>
      <Typography variant="h1">{value}</Typography>
      <PercentageWrapper>
        {isPositivePercentage ? <Icon.ChartUp /> : <Icon.ChartDown />}
        <Typography variant="h3" color={isPositivePercentage ? 'primary.green' : 'primary.red'}>
          {percentage}
        </Typography>
        <Typography variant="h3">{compareString}</Typography>
      </PercentageWrapper>
    </LabelWrapper>
  )
}

export default LabelItem
