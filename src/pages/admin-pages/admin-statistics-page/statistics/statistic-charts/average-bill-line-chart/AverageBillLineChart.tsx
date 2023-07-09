import { FC, useEffect } from 'react'

import { LineChart, ChartContainer } from 'components'
import { useLazyGetAverageBillStatisticQuery } from 'store/api'
import { selectChartValues } from './AverageBillLineChart.utils'

const AverageBillLineChart: FC = () => {
  const [getLineChartData, { data, isSuccess }] = useLazyGetAverageBillStatisticQuery()

  const handleSelectChange = (value: string) => {
    getLineChartData({ period: value })
  }

  useEffect(() => {
    getLineChartData({})
  }, [getLineChartData])

  return (
    <ChartContainer size={7} selectData={selectChartValues} onSelectChange={handleSelectChange}>
      {isSuccess && data && <LineChart data={data} title="Average bill" />}
    </ChartContainer>
  )
}

export default AverageBillLineChart
