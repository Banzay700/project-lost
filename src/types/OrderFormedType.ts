type FormedDishType = {
  dishID: string
  amount: number
  dishTotalPrice: number
}

export type OrderFormedType = {
  orderType: string
  orderNumber: number
  table: string
  description?: string
  totalPrice: number
  dishes: FormedDishType[]
}
