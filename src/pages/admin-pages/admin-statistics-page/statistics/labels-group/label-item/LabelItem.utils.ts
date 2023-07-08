import { StatisticLabelsResponseType } from 'types/StatisticTypes'

const formatNumber = (value: number, precision = 2) => {
  const suffixMap = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ]
  const correctedPrecision = value < 1000 ? 0 : precision
  const found = suffixMap.find((x) => Math.abs(value) >= x.threshold)

  if (found) {
    const formattedValue = (value / found.threshold).toFixed(correctedPrecision) + found.suffix
    return `$ ${formattedValue}`
  }

  return `$ ${value}`
}

export const prepareStatisticLabelData = (data: StatisticLabelsResponseType) => {
  const { title, value, percentage, period } = data
  const precision = title === 'Average bill' ? 2 : title === 'Total revenue' ? 1 : 0
  const compareString = period === 'Daily' ? 'vs last 7 days' : 'vs last month'

  let formatLabelValue

  if (title === 'Failure rate') {
    formatLabelValue = `${value}%`
  } else if (title !== 'Failure rate' && title !== 'Total orders' && value < 999) {
    formatLabelValue = `$ ${value}`
  } else if (title !== 'Total orders' && value > 999) {
    formatLabelValue = formatNumber(value, precision)
  } else {
    formatLabelValue = value
  }

  return {
    title,
    value: formatLabelValue,
    percentage: `${percentage}%`,
    compareString,
    period,
  }
}
