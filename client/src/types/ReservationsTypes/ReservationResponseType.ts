type TableItems = {
  id: string
  number: number
  seats: number
  sector: number
  status: string
}

export type ReservationResponseType = {
  id: string
  date: string
  time: string
  clientName: string
  phoneNumber: string
  status: 'cancelled' | 'done' | 'active'
  table?: TableItems
  email?: string
  tags?: string
  notes?: string
  user?: string
}
