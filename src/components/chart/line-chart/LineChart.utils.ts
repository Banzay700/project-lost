import { theme } from 'theme'

export const lineChartStyles = {
  fill: true,
  borderColor: theme.palette.background.default,
  backgroundColor: theme.palette.background.chartQuaternary,
}

export const lineChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '',
    },
    legend: { display: false },
  },
  scales: {
    y: { grid: { display: false } },
    x: { grid: { display: false } },
  },
}
