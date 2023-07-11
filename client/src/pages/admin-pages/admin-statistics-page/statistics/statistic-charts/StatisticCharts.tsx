import { FC } from 'react'

import { ChartsGroup, ChartsWrapper } from './StatisticCharts.styled'
import { InvoiceDiagram } from './invoice-diagram'
import { OrderTypeStatisticChart } from './order-type-statistic-chart'
import { TopCategoriesBarChart } from './top-categories-chart'
import { AverageBillLineChart } from './average-bill-line-chart'

const StatisticCharts: FC = () => {
  return (
    <ChartsWrapper>
      <ChartsGroup>
        <InvoiceDiagram />
        <OrderTypeStatisticChart />
      </ChartsGroup>
      <ChartsGroup>
        <TopCategoriesBarChart />
        <AverageBillLineChart />
      </ChartsGroup>
    </ChartsWrapper>
  )
}

export default StatisticCharts
