import { FC, useEffect } from 'react'

import { DoughnutChart } from 'components'
import { ChartContainer } from 'components/admin-components'
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
      {isSuccess && data && <DoughnutChart data={data} title="Best sales by Service type" />}
    </ChartContainer>
  )
}

export default OrderTypeStatisticChart
