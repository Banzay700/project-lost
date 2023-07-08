import { FC } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import { DataDoughnutChartType } from 'types'
import { doughnutChartOptions, doughnutChartStyles } from './DoughnutChart.utils'

interface DoughnutChartProps {
  data: DataDoughnutChartType
  title: string
}

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart: FC<DoughnutChartProps> = ({ data, title }) => {
  const styledData = { ...data, datasets: [{ ...data?.datasets[0], ...doughnutChartStyles }] }
  doughnutChartOptions.plugins.title.text = title

  return <Doughnut data={styledData} options={doughnutChartOptions} />
}

export default DoughnutChart
