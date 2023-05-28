export type OrderCreatorFormValues = {
  orderType: string
  table?: string
}

export type DishDBType = {
  amount: number
  dishTotalPrice: number
  dishID: string
}

export type DishType = {
  amount: number
  dishTotalPrice: number
  title: string
  picture: string
  price: number
  id: string
}

export type DishActiveType = Omit<DishType, 'price' | 'id'> & {
  dishID: string
}

export type CommonOrderType = {
  orderType: string
  table?: string
  orderNumber: number
  totalPrice: number
  description?: string
}

export type NewOrderType = CommonOrderType & {
  dishes: DishType[]
}

export type OrderDBType = CommonOrderType & {
  dishes: DishDBType[]
}

export type OrderActiveType = CommonOrderType & {
  active: boolean
  dishes: DishActiveType[]
}
