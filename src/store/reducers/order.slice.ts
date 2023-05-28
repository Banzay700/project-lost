import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { OrderCreatorFormValues } from 'types'
import { IDishes } from 'types/IOrder'

type ActiveDishType = {
  dishID: string
  amount: number
  dishTotalPrice: number
  _id: string
  title: string
  price: number
  picture: string
}

export type ActiveOrderType = {
  orderType: string
  table: string
  orderNumber: number
  description?: string
  totalPrice: number
  id: string
  dishes: ActiveDishType[]
}

export interface NewOrderType extends OrderCreatorFormValues {
  orderNumber: number
  description?: string
  dishes: IDishes[]
  totalPrice?: number
}

interface NewOrderState {
  newOrder: NewOrderType
  activeOrder: ActiveOrderType
}

const initialState: NewOrderState = {
  newOrder: {
    orderType: '',
    table: '',
    orderNumber: 0,
    dishes: [],
    totalPrice: 0,
    description: '',
  },
  activeOrder: {
    orderType: '',
    table: '',
    orderNumber: 0,
    dishes: [],
    totalPrice: 0,
    description: '',
    id: '',
  },
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    openNewOrder: (state, action: PayloadAction<NewOrderType>) => {
      state.newOrder = action.payload
    },
    addDishToOrder: (state, action: PayloadAction<IDishes>) => {
      const { payload } = action
      const { dishes } = state.newOrder
      const dish = dishes.find((dishEl) => dishEl.id === payload.id)

      if (dish) {
        dish.amount = payload.amount
        dish.dishTotalPrice = payload.amount * payload.price
      } else {
        dishes.push(payload)
      }
    },
    addOrderToActive: (state, action: PayloadAction<ActiveOrderType>) => {
      state.activeOrder = action.payload
    },
    removeAllDishesFromOrder: (state) => {
      state.newOrder.dishes = []
    },
  },
})

export const { openNewOrder, addDishToOrder, addOrderToActive } = ordersSlice.actions

export default ordersSlice.reducer
