type DatasetDoughnutChartType = {
  label: string
  data: number[]
  borderColor?: string[]
  backgroundColor?: string[]
  borderWidth?: number
}

export type DataDoughnutChartType = {
  labels: string[]
  datasets: DatasetDoughnutChartType[]
}

export type ServiceTypeStatisticRequest = {
  period?: string
}
