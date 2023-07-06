import { FC } from 'react'

import { LabelsGroup } from './labels-group'
import { StatisticCharts } from './statistic-charts'
import { StatisticsWrapper } from './Statistics.styled'

const mokStatisticLabelsData = [
  {
    title: 'Total revenue',
    value: 30000, // Загальна виручка за день
    percentage: 16, // % порівняно з попередніми 7 днями
    period: 'Daily',
  },
  {
    title: 'Total orders',
    value: 234,
    percentage: 30, // % порівняно з попередніми 7 днями
    period: 'Daily',
  },
  {
    title: 'Average bill',
    value: 1200, // Середній чек за місяць
    percentage: -6, // % порівняно з попереднім місяцем
    period: 'Monthly',
  },
  {
    title: 'Failure rate',
    value: 21, // % порівняно з попереднім місяцем
    percentage: 12, // % порівняно з попереднім місяцем
    period: 'Monthly',
  },
]

const Statistics: FC = () => {
  return (
    <StatisticsWrapper>
      <LabelsGroup data={mokStatisticLabelsData} />
      <StatisticCharts />
    </StatisticsWrapper>
  )
}

export default Statistics
