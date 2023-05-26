import { DishesBills, TableData } from 'types/TableType'

export const total = (element: TableData, type: 'amount' | 'price'): number => {
  return (element.dishes as DishesBills[]).reduce((prev: number, currentValue: DishesBills) => {
    switch (type) {
      case 'price':
        prev += currentValue.price
        break
      case 'amount':
        prev += currentValue.amount
        break
      default:
        return 0
    }

    return prev
  }, 0)
}
