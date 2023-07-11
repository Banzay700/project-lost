import { theme } from 'theme/index'

export const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Total revenue',
    },
  },
  scales: {
    y: { grid: { display: false } },
    x: { grid: { display: false } },
  },
}

export const lineDiagramStyles = {
  backgroundColor: theme.palette.primary.light,
}
