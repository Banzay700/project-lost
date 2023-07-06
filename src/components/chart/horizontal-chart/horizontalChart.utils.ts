import { DataHorizontalChart } from 'types'
import { theme } from 'theme'
import { correctionName } from 'utils'

const colorPalette = {
  backgroundColor: [
    theme.palette.background.chartPrimary,
    theme.palette.background.chartSecondary,
    theme.palette.background.chartTertiary,
    theme.palette.background.chartQuaternary,
  ],
  borderColor: [
    theme.palette.border.white,
    theme.palette.border.white,
    theme.palette.border.white,
    theme.palette.border.white,
  ],
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

export const horizontalChartOptions = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  scales: {
    y: {
      ticks: { display: false },
      grid: { display: false },
    },
    x: {
      grid: { display: false },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
}
