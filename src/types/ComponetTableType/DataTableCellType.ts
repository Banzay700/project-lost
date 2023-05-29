import { TableCellType, TableDataItem } from 'types/index'

export type DataTableCellType<T> = {
  element: T
  onClick?: (dataOrder: TableDataItem) => void
  className?: string
}

export type DataTableCellFuncType<T> = ({
  element,
  onClick,
  className,
}: DataTableCellType<T>) => TableCellType[]
