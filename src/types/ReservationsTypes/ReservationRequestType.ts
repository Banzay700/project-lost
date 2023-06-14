type TableItems = {
  id: string
  number: number
  seats: number
  sector: number
  status: string
}

export type ReservationRequestType = {
  id: string
  booking: number
  clientName: string
  phoneNumber: string
  status: 'cancelled' | 'done' | 'active'
  table?: TableItems
  email?: string
  visitTag?: string
  notes?: string
  user?: string
}
