import { TableReservationInfoType } from './TableReservationInfoType'

export type TableType = {
  id?: string
  number: string
  tableLimit: number
  reserved?: boolean
  reservationInfo?: TableReservationInfoType[]
}
