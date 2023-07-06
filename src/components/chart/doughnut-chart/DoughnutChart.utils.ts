import { theme } from 'theme/index'

export const doughnutChartStyles = {
  backgroundColor: [
    theme.palette.primary.light,
    theme.palette.secondary.lightBlue,
    theme.palette.primary.lightRed,
  ],
  borderColor: [theme.palette.border.white, theme.palette.border.white, theme.palette.border.white],
  borderWidth: 2,
}

export const doughnutChartOptions = {
  plugins: {
    legend: { position: 'bottom' as const },
  },
}
