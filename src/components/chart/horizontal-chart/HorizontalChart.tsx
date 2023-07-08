import { FC } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { DataChart } from 'types'
import { addBackgroundAndBorder, horizontalChartOptions } from './horizontalChart.utils'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip)

interface StatisticsChartCategoryProps {
  data: DataChart
  title: string
}

const HorizontalChart: FC<StatisticsChartCategoryProps> = ({ data, title }) => {
  const newData = data && addBackgroundAndBorder(data)
  horizontalChartOptions.plugins.title.text = title

  return <Bar options={horizontalChartOptions} data={newData} />
}

export default HorizontalChart
