import { theme } from 'theme/index'

export const doughnutChartStyles = {
  backgroundColor: [
    theme.palette.background.chartPrimary,
    theme.palette.background.chartSecondary,
    theme.palette.background.chartTertiary,
  ],
  borderColor: [theme.palette.border.white, theme.palette.border.white, theme.palette.border.white],
  borderWidth: 3,
}

export const doughnutChartOptions = {
  plugins: {
    legend: { position: 'bottom' as const },
    title: {
      display: true,
      text: '',
    },
  },
}
