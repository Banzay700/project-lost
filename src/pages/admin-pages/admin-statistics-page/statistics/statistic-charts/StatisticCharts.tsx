import { FC } from 'react'

import { ChartsWrapper } from './StatisticCharts.styled'
import { InvoiceDiagram } from './invoice-diagram'
import { OrderTypeStatisticChart } from './order-type-statistic-chart'
import { TopCategoriesBarChart } from './top-categories-chart'
import { AverageBillLineChart } from './average-bill-line-chart'

const StatisticCharts: FC = () => {
  return (
    <ChartsWrapper container spacing="2%">
      <InvoiceDiagram />
      <OrderTypeStatisticChart />
      <TopCategoriesBarChart />
      <AverageBillLineChart />
    </ChartsWrapper>
  )
}

export default StatisticCharts
