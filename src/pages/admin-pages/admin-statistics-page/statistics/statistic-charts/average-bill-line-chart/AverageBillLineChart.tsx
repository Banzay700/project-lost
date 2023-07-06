import { FC } from 'react'

import { LineChart } from 'components'
import { ChartContainer } from 'components/admin-components'

const selectDataMok = [
  { value: '1', label: 'Month' },
  { value: '2', label: 'Quarter' },
  { value: '3', label: 'Year' },
]

const AverageBillLineChart: FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 2',
        data: [34, 28, 45, 32, 52, 36, 31],
      },
    ],
  }

  return (
    <ChartContainer size={7} selectData={selectDataMok} onSelectChange={() => {}}>
      <LineChart data={data} title="Average Bill" />
    </ChartContainer>
  )
}

export default AverageBillLineChart
