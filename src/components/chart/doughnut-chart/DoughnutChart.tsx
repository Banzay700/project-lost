import { FC } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { ChartContainer } from 'components/admin-components'
import { doughnutChartOptions, doughnutChartStyles } from './DoughnutChart.utils'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart: FC = () => {
  const data = {
    labels: ['Dine In', 'Take Away', 'Delivery'],
    datasets: [{ label: 'Total', data: [12, 19, 3] }],
  }

  data.datasets = [{ ...data.datasets[0], ...doughnutChartStyles }]

  return (
    <ChartContainer size="small">
      <Doughnut data={data} options={doughnutChartOptions} />
    </ChartContainer>
  )
}

export default DoughnutChart
