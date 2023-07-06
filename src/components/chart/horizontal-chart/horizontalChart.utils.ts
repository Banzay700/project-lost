import { DataHorizontalChart } from 'types/StatisticTypes'
import { correctionName } from 'utils/correctionName'

const colorPalette = {
  backgroundColor: ['rgb(53, 162, 235)', 'rgb(0,223,137)', 'rgb(255,92,92)', 'rgb(255,228,92)'],
  borderColor: ['rgba(53, 162, 235, 0.5)', 'rgb(2,120,73)', 'rgb(211,8,8)', 'rgb(148,125,5)'],
}
export const addBackgroundAndBorder = (data: DataHorizontalChart) => {
  const { borderColor, backgroundColor } = colorPalette

  const datasets = data?.datasets.map((item, index) => {
    const colorIndex = index % borderColor.length
    return {
      ...item,
      label: correctionName(item.label),
      borderColor: borderColor[colorIndex],
      backgroundColor: backgroundColor[colorIndex],
    }
  })

  const labels = [correctionName(data.labels[0])]
  return {
    labels,
    datasets,
  }
}
