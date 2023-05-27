import { TableCellType, TableDataBills } from 'types'

export type DataTableCellType<T> = {
  element: T | undefined
  // onClick: (element: TableDataBills | undefined) => TableDataBills
  className?: string
}

export type DataTableCellFuncType<T> = ({
  element,
  // onClick,
  className,
}: DataTableCellType<T>) => TableCellType[]
