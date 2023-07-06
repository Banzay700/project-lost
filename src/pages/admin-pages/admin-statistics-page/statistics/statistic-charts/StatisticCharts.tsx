import { FC } from 'react'
import { ChartContainer } from 'components/admin-components'
import { DoughnutChart } from 'components'
import { ChartsWrapper } from './StatisticCharts.styled'
import { StatisticsSalesTopCategory } from 'pages/admin-pages/admin-statistics-page/statistics/statistics-sales-top-category'

const StatisticCharts: FC = () => {
  return (
    <ChartsWrapper container spacing="2%">
      {/*<StatisticsSalesTopCategory />*/}
      <ChartContainer size="big">I&#39;m ChartContainer place inside me your chart</ChartContainer>
      <DoughnutChart />
      <DoughnutChart />
      <ChartContainer size="big">I&#39;m ChartContainer place inside me your chart</ChartContainer>
    </ChartsWrapper>
  )
}

export default StatisticCharts
