import { TableDataMok } from 'types/index'

export const transformTableTitle = (data: TableDataMok[], titles: string[]): string[] => {
  if (data[0].status === undefined) {
    return titles.filter((item) => item !== 'Status')
  }
  return titles
}
