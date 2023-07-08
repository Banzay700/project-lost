import { FC } from 'react'

import { DoughnutChart, ChartContainer } from 'components'

const doughnutSelectDataMok = [
  { value: '1', label: 'Month' },
  { value: '2', label: 'Quarter' },
  { value: '3', label: 'Year' },
]

const OrderTypeStatisticChart: FC = () => {
  const data = {
    labels: ['Dine In', 'Take Away', 'Delivery'],
    datasets: [{ label: 'Total', data: [12, 19, 3] }],
  }
  const handleChangePeriod = (query: string) => {}

  return (
    <ChartContainer size={4} selectData={doughnutSelectDataMok} onSelectChange={handleChangePeriod}>
      <DoughnutChart data={data} title="Best sales by Service type" />
    </ChartContainer>
  )
}

export default OrderTypeStatisticChart
