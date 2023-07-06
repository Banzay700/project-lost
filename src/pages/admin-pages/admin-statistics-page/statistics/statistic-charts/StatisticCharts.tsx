import { FC } from 'react'

import { ChartContainer } from 'components/admin-components'
import { TopCategoriesBarChart } from './top-categories-chart'
import { OrderTypeStatisticChart } from './order-type-statistic-chart'
import { ChartsWrapper } from './StatisticCharts.styled'
import { AverageBillLineChart } from './average-bill-line-chart'

const StatisticCharts: FC = () => {
  return (
    <ChartsWrapper container spacing="2%">
      <ChartContainer size={8} onSelectChange={() => {}}>
        I&#39;m ChartContainer place inside me your chart
      </ChartContainer>
      <OrderTypeStatisticChart />
      <TopCategoriesBarChart />
      <AverageBillLineChart />
    </ChartsWrapper>
  )
}

export default StatisticCharts
