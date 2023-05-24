export interface IReservationsInfo {
  id?: string
  date: string
  time: string
  clientName: string
  phoneNumber: string
  email: string
  visitTag?: string
  notes?: string
}

export interface ITable {
  id?: string
  number: string
  tableLimit: number
  reserved?: boolean
  reservationInfo?: IReservationsInfo[]
}

export interface IRequestDeleteReservation {
  acknowledged: boolean
  modifiedCount: number
  upsertedId: null
  upsertedCount: number
  matchedCount: number
}
export type TableMessageType = { message: string; tableReservations: string[] }
