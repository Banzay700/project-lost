type FormedDishType = {
  dishID: string
  picture: string
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
