import { TableDataMok, TableCellType } from 'types'

export type DataTableCellType = (
  element: TableDataMok,
  className?: string,
) => (TableCellType | undefined)[]
