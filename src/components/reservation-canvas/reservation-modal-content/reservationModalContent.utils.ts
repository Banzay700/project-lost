import dayjs from 'dayjs'
import { ReservationCanvasType } from 'types/ReservationsTypes'

export const convertToDate = (timestamp: number) => {
  const dateTimeString = dayjs.unix(timestamp).format('DD-MM HH:mm')
  const [date, time] = dateTimeString.split(' ')
  const today = dayjs().format('DD-MM')

  if (date === today) {
    return { date: 'Today', time }
  }
  return { date, time }
}

export const prepareReservationData = ({
  reservation,
  date,
  time,
}: {
  reservation: ReservationCanvasType
  date: string
  time: string
}) => {
  return [
    { label: 'Reservation time:', value: time },
    { label: 'Reservation date:', value: date },
    { label: 'Client Name:', value: reservation?.clientName },
    { label: 'Contact number:', value: reservation?.phoneNumber },
    { label: 'Party size:', value: `${reservation?.persons} guests` },
  ]
}
