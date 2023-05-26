import { TableCellType } from 'types'

export type DataTableCellType<T> = {
  element: T | undefined
  totalPrice?: number | undefined
  totalAmount?: number | undefined
  className?: string
}

export type DataTableCellFuncType<T> = ({
  element,
  totalPrice,
  totalAmount,
  className,
}: DataTableCellType<T>) => TableCellType[]
