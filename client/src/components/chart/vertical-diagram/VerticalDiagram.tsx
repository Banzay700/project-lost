import { FC } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { StatisticsChartDataType } from 'types'
import { lineDiagramStyles, options } from './VerticalDiagram.utils'

interface InvoiceDiagramProps {
  data: StatisticsChartDataType
}

const VerticalDiagram: FC<InvoiceDiagramProps> = ({ data }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)
  const updatedData = { ...data, datasets: [{ ...data.datasets[0], ...lineDiagramStyles }] }

  return <Bar options={options} data={updatedData} />
}

export default VerticalDiagram
