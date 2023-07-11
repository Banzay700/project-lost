import dayjs from 'dayjs'

export const getTodayReservations = reservations => {
  const today = dayjs().format('YYYY-MM-DD')

  return reservations.filter(({ date }) => dayjs(date).isSame(today))
}
