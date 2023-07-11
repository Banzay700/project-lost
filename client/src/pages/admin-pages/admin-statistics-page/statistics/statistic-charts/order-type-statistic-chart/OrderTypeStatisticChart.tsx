import { FC, useEffect } from 'react'

import { ChartContainer, DoughnutChart } from 'components'
import { DoughnutChartSkeleton } from 'UI'
import { useLazyGetServiceTypeStatisticQuery } from 'store/api'
import { doughnutSelectDataMok } from './OrderTypeStatisticChart.utils'

const OrderTypeStatisticChart: FC = () => {
  const [getServiceTypeData, { data, isSuccess, isLoading }] = useLazyGetServiceTypeStatisticQuery()

  const handleChangePeriod = (value: string) => {
    getServiceTypeData({ period: value })
  }

  useEffect(() => {
    getServiceTypeData({})
  }, [getServiceTypeData])

  return (
    <ChartContainer size={4} selectData={doughnutSelectDataMok} onSelectChange={handleChangePeriod}>
      {isSuccess && data && <DoughnutChart data={data} title="Top by Order Type" />}
      {isLoading && <DoughnutChartSkeleton />}
    </ChartContainer>
  )
}

export default OrderTypeStatisticChart
