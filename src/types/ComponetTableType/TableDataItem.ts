import { BillsType, OrderType } from 'types'

export type Categories = {
  category: string
  subcategories: string[]
}

export type TableDataItem = BillsType | OrderType
