import { BillsType, DishType, OrderType, UserType } from 'types'

export type Reservation = {
  username: string
  time: string
  table: string
  order: number
  id?: string
}

export type Categories = {
  category: string
  subcategories: string[]
}

export type TableDataItem = BillsType | OrderType | Reservation | UserType | DishType
