import { FC } from 'react'

import { useGetGeneralStatisticQuery } from 'store/api'
import { LabelsGroup } from './labels-group'
import { StatisticCharts } from './statistic-charts'
import { StatisticsWrapper } from './Statistics.styled'

const Statistics: FC = () => {
  const { data, isLoading } = useGetGeneralStatisticQuery()

  return (
    <StatisticsWrapper>
      <LabelsGroup data={data} isLoading={isLoading} />
      <StatisticCharts />
    </StatisticsWrapper>
  )
}

export default Statistics
