import { TableReservationInfoType } from './TableReservationInfoType'

export type TableType = {
  id?: string
  number: string
  seats: number
  status?: boolean
  reservationInfo?: TableReservationInfoType[]
}
