import { FC } from 'react'
import { ChartsWrapper } from './StatisticCharts.styled'
import { StatisticsSalesTopCategory } from '../statistics-sales-top-category'

const StatisticCharts: FC = () => {
  return (
    <ChartsWrapper>
      <StatisticsSalesTopCategory />
    </ChartsWrapper>
  )
}

export default StatisticCharts
