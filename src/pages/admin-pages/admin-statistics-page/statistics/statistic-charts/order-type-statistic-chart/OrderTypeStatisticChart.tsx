import { FC, useEffect } from 'react'

import { DoughnutChart, ChartContainer } from 'components'
import { useLazyGetServiceTypeStatisticQuery } from 'store/api'
import { doughnutSelectDataMok } from './OrderTypeStatisticChart.utils'

const OrderTypeStatisticChart: FC = () => {
  const [getServiceTypeData, { data, isSuccess }] = useLazyGetServiceTypeStatisticQuery()

  const handleChangePeriod = (value: string) => {
    getServiceTypeData({ period: value })
  }

  useEffect(() => {
    getServiceTypeData({})
  }, [getServiceTypeData])

  return (
    <ChartContainer size={4} selectData={doughnutSelectDataMok} onSelectChange={handleChangePeriod}>
      {isSuccess && data && <DoughnutChart data={data} title="Top by Order Type" />}
    </ChartContainer>
  )
}

export default OrderTypeStatisticChart
