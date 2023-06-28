import dayjs from 'dayjs'

export const generateTimeString = (time: string) => {
  const currentDate = dayjs()
  const timeStamp = dayjs.unix(Number(time))
  const difTime = timeStamp.diff(currentDate, 'minutes')

  if (difTime > 60) {
    const hours = Math.floor(difTime / 60)
    const minutes = difTime % 60
    return `${hours} h ${minutes} min`
  }

  if (difTime < 0) {
    return 'Overdue'
  }

  return `${difTime} min`
}
