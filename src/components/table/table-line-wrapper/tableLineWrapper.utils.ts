import { Dishes, TableData } from 'types/TableType'

export const total = (element: TableData): number => {
  return (element.dishes as Dishes[]).reduce((prev: number, currentValue: Dishes) => {
    prev += currentValue.totalPrice
    return prev
  }, 0)
}
