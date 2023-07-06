export type DatasetHorizontalChartType = {
  label: string
  data: number[]
  borderColor?: string
  backgroundColor?: string
}

export type DataHorizontalChart = {
  labels: string[]
  datasets: DatasetHorizontalChartType[]
}

export type StatisticsTopCategoryRequest = {
  category?: string
}
