export type DatasetChartType = {
  label: string
  data: number[]
  borderColor?: string
  backgroundColor?: string
}

export type DataChart = {
  labels: string[]
  datasets: DatasetChartType[]
}
