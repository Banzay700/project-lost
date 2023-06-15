import dayjs from 'dayjs'
import { ReservationResponseType } from 'types/ReservationsTypes'

export const tableTitleReservation: string[] = [
  'CUSTOMER NAME',
  'TIME',
  'TABLE',
  'PHONE NUMBER',
  'STATUS',
]

export const prepareDataReservation = (data: ReservationResponseType[]) => {
  return data.map((item) => {
    return { ...item, time: dayjs(item.booking).format('HH:mm') }
  })
}
