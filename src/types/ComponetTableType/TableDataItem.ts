import { BillsType, DishType, OrderType, ReservationRequestType, UserType } from 'types'

export type Categories = {
  category: string
  subcategories: string[]
}

export type TableDataItem = BillsType | OrderType | ReservationRequestType | UserType | DishType
