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
import { DataHorizontalChart } from 'types'
import { addBackgroundAndBorder } from './horizontalChart.utils'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface StatisticsChartCategoryProps {
  data: DataHorizontalChart
  titleChart?: string
}

const HorizontalChart: FC<StatisticsChartCategoryProps> = ({ data, titleChart }) => {
  const newData = data && addBackgroundAndBorder(data)

  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: `${titleChart || 'Chart'}`,
      },
    },
  }

  return <Bar options={options} data={newData} />
}

export default HorizontalChart
