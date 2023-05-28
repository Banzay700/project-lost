import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { OrderActiveType, DishType, NewOrderType } from 'types/ORDERS_TYPES'
import { emptyOrderState } from 'store/reducers/reducers.utils'

interface OrderState {
  newOrder: NewOrderType
  activeOrder: OrderActiveType
}

const initialState: OrderState = {
  newOrder: {
    ...emptyOrderState,
  },
  activeOrder: {
    active: false,
    ...emptyOrderState,
  },
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    openNewOrder: (state, action: PayloadAction<NewOrderType>) => {
      state.newOrder = action.payload
    },
    addDishToOrder: (state, action: PayloadAction<DishType>) => {
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
    addOrderToActive: (state, action: PayloadAction<OrderActiveType>) => {
      state.activeOrder = action.payload
    },
    changeOrderStatus: (state) => {
      state.activeOrder.active = !state.activeOrder.active
    },
    deleteNewOrder: (state) => {
      state.newOrder = {
        ...emptyOrderState,
      }
    },
    removeAllDishesFromOrder: (state) => {
      state.newOrder.dishes = []
    },
  },
})

export const { openNewOrder, addDishToOrder, addOrderToActive, changeOrderStatus, deleteNewOrder } =
  ordersSlice.actions

export default ordersSlice.reducer
