import { FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { lineChartOptions, lineChartStyles } from './LineChart.utils'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

interface LineChartProps {
  data: any
  title: string
}

const LineChart: FC<LineChartProps> = ({ data, title }) => {
  lineChartOptions.plugins.title.text = title
  data.datasets = [{ ...data.datasets[0], ...lineChartStyles }]

  return <Line options={lineChartOptions} data={data} />
}

export default LineChart
