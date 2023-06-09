import { ReservationCanvasType } from '../ReservationsTypes'

export type TableType = {
  id: string
  number: string
  seats: number
  status: boolean
  sector: number
  reservation?: ReservationCanvasType
}
