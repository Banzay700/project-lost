import { FC, useEffect } from 'react'

import { LineChart, ChartContainer } from 'components'
import { BarChartSkeleton } from 'UI'
import { useLazyGetAverageBillStatisticQuery } from 'store/api'
import { selectChartValues } from './AverageBillLineChart.utils'

const AverageBillLineChart: FC = () => {
  const [getLineChartData, { data, isSuccess, isLoading }] = useLazyGetAverageBillStatisticQuery()

  const handleSelectChange = (value: string) => {
    getLineChartData({ period: value })
  }

  useEffect(() => {
    getLineChartData({})
  }, [getLineChartData])

  return (
    <ChartContainer size={5.5} selectData={selectChartValues} onSelectChange={handleSelectChange}>
      {isSuccess && data && <LineChart data={data} title="Average bill" />}
      {isLoading && <BarChartSkeleton barItemsColor="background.chartQuaternaryLight" />}
    </ChartContainer>
  )
}

export default AverageBillLineChart
