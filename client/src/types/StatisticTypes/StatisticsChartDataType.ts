type DatasetChartType = {
  label: string
  data: number[]
  borderColor?: string[] | string
  backgroundColor?: string[] | string
  borderWidth?: number
}

export type StatisticsChartDataType = {
  labels: string[]
  datasets: DatasetChartType[]
}
