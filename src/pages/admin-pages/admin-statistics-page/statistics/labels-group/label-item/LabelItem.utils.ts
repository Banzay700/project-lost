import { StatisticLabelsResponseType } from 'types/StatisticTypes'

const formatNumber = (value: number, precision = 2) => {
  const suffixMap = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ]
  const found = suffixMap.find((x) => Math.abs(value) >= x.threshold)

  if (found) {
    return (value / found.threshold).toFixed(precision) + found.suffix
  }

  return value
}

export const prepareStatisticLabelData = (data: StatisticLabelsResponseType) => {
  const { title, value, percentage, period } = data
  const precision = title === 'Average bill' ? 2 : title === 'Total revenue' ? 1 : 0

  const formatLabelValue = title === 'Failure rate' ? `${value}%` : formatNumber(value, precision)

  const compareString = period === 'daily' ? 'vs last 7 days' : 'vs last month'

  return {
    title,
    value: formatLabelValue,
    percentage: `${percentage}%`,
    compareString,
    period,
  }
}
