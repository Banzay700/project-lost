import { BillsType, DishType, OrderType, ReservationResponseType, UserType } from 'types'

export type Categories = {
  category: string
  subcategories: string[]
}

export type TableDataItem = BillsType | OrderType | ReservationResponseType | UserType | DishType
