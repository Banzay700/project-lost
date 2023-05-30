import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { OrderActiveType, OrderDishResponseType, OrderResponseType } from 'types'
import { emptyOrderState } from 'store/reducers/reducers.utils'

interface OrderState {
  newOrder: OrderResponseType
  activeOrder: OrderActiveType
}

const initialState: OrderState = {
  newOrder: {
    ...emptyOrderState,
  },
  activeOrder: {
    ...emptyOrderState,
    active: false,
  },
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    openNewOrder: (state, action: PayloadAction<OrderResponseType>) => {
      state.newOrder = action.payload
    },
    addDishToOrder: (state, action: PayloadAction<OrderDishResponseType>) => {
      const { payload } = action
      const { dishes } = state.newOrder
      const dish = dishes.find((dishEl) => dishEl.dishID === payload.dishID)

      if (dish) {
        dish.amount = payload.amount
        dish.dishTotalPrice = payload.amount * payload.price
      } else {
        dishes.push(payload)
      }
    },
    addOrderToActive: (state, action: PayloadAction<OrderActiveType>) => {
      state.activeOrder = { ...action.payload, active: true }
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
