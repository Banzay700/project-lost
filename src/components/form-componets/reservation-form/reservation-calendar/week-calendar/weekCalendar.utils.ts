import dayjs from 'dayjs'

const SHORT_WEEK = 5
const LONG_WEEK = 7

export const generateWeek = (startDay: Date, screenSize: boolean) => {
  const maxDaysInWeek = screenSize ? SHORT_WEEK : LONG_WEEK
  const day = dayjs(startDay)
  const dates: Date[] = []

  for (let i = 0; i < maxDaysInWeek; i++) {
    const date = day.clone().add(i, 'day').toDate()
    dates.push(date)
  }
  return dates
}
