import { FC } from 'react'
import { Typography, useTheme, useMediaQuery } from '@mui/material'

import { InfoTag } from 'UI'
import { Icon } from 'assets'
import { StatisticLabelsResponseType } from 'types'
import { PercentageWrapper, TitleLineWrapper, LabelContent } from './LabelItem.styled'
import { prepareStatisticLabelData } from './LabelItem.utils'
import { LabelItemContainer } from './label-item-container'

interface LabelItemProps {
  labelInfo: StatisticLabelsResponseType
}

const LabelItem: FC<LabelItemProps> = ({ labelInfo }) => {
  const { title, value, percentage, period, compareString } = prepareStatisticLabelData(labelInfo)
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down(1145))
  const isPositivePercentage = labelInfo.percentage > 0

  return (
    <LabelItemContainer>
      <LabelContent>
        <TitleLineWrapper>
          <Typography variant={isTablet ? 'h3' : 'h2'} fontWeight={500}>
            {title}
          </Typography>
          <InfoTag label={period} type="primary" size="small" />
        </TitleLineWrapper>
        <Typography variant="h1">{value}</Typography>
        <PercentageWrapper>
          {isPositivePercentage ? <Icon.ChartUp /> : <Icon.ChartDown />}
          <Typography
            variant={isTablet ? 'h3' : 'h2'}
            color={isPositivePercentage ? 'primary.green' : 'primary.red'}>
            {percentage}
          </Typography>
          <Typography variant={isTablet ? 'subtitle2' : 'subtitle1'}>{compareString}</Typography>
        </PercentageWrapper>
      </LabelContent>
    </LabelItemContainer>
  )
}

export default LabelItem
