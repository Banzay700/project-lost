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
import { StatisticsChartDataType } from 'types'
import { lineChartOptions, lineChartStyles } from './LineChart.utils'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

interface LineChartProps {
  data: StatisticsChartDataType
  title: string
}

const LineChart: FC<LineChartProps> = ({ data, title }) => {
  const styledData = { ...data, datasets: [{ ...data?.datasets[0], ...lineChartStyles }] }
  lineChartOptions.plugins.title.text = title

  return <Line options={lineChartOptions} data={styledData} />
}

export default LineChart
