import { ReservationCanvasType } from '../ReservationsTypes'

export type TableType = {
  id: string
  number: string
  seats: number
  status: string
  sector: number
  reservation?: ReservationCanvasType
}
