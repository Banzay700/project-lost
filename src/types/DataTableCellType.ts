import { TableCellType, TableData } from 'types'

export type DataTableCellType<T> = {
  element: T
  onClick?: (dataOrder: TableData) => void
  className?: string
}

export type DataTableCellFuncType<T> = ({
  element,
  onClick,
  className,
}: DataTableCellType<T>) => TableCellType[]
