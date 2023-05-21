import { TableDataMok } from 'types/index'

const tableTitle: string[] = [
  'Table Number',
  'Order Number',
  'Amount',
  'Status',
  'Order Type',
  'Actions',
]

export const transformTableTitle = (data: TableDataMok[]): string[] => {
  if (data[0].status === undefined) {
    return tableTitle.filter((item) => item !== 'Status')
  }
  return tableTitle
}
