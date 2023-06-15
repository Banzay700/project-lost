export type ReservationRequestType = {
  tags?: string[]
  table: string
  date: string
  time: string
  persons: number
  clientName: string
  email?: string
  phoneNumber: string
  note?: string
  user?: string
}
