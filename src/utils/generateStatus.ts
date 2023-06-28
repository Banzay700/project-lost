import dayjs from 'dayjs'

interface ReturnStatusType {
  type: 'primary' | 'red' | 'green'
  label: string
}

export const generateStatus = (time: string): ReturnStatusType => {
  const currentDate = dayjs()
  const timeStamp = dayjs.unix(Number(time))
  const difTime = timeStamp.diff(currentDate, 'minutes')

  if (difTime < 10) {
    return { type: 'red', label: 'Priority' }
  }

  if (difTime >= 10 && difTime < 20) {
    return { type: 'primary', label: 'Timely' }
  }

  return { type: 'green', label: 'Flexible' }
}
